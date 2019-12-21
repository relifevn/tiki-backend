const db = require('../db');
const User = require('../models').User;
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const login = async (req, res, next) => {
    User.findOne({ where: { email: req.body.email } })
        .then(user => {
            if (!user) {
                return res.json({
                    success: false,
                    message: "Auth failed",
                });
            }
            bcrypt.compare(req.body.password, user.password, (err, result) => {
                if (err) {
                    return res.json({
                        success: false,
                        message: "Auth failed"
                    });
                }
                if (result) {
                    const token = jwt.sign(
                        {
                            email: user.email,
                            id: user.id,
                            username: user.username
                        },
                        process.env.SECRET_KEY,
                        {
                            expiresIn: "1h"
                        }
                    );
                    return res.json({
                        success: true,
                        token: token
                    });
                }
                res.json({
                    success: false,
                    message: "Auth failed"
                });
            });
        })
        .catch(err => {
            res.json({
                success: false,
                error: err
            });
        });

};

const register = async (req, res, next) => {
    User.findOne({where: {username: req.body.username}}).then(user => {
        if (user) return res.json({
            success: false,
            message: "Duplicate username",
        }); else
            User.findOne({where: {email: req.body.email}}).then(user => {
                if (user) return res.json({
                    success: false,
                    message: "Duplicate email",
                });
                else bcrypt.hash(req.body.password, 10, (err, hash) => {
                    if (err)
                        return res.json({
                            success: false,
                            message: err
                        });
                    User.create({
                        username: req.body.username,
                        email: req.body.email,
                        credit_card_number: req.body.credit_card_number,
                        password: hash,
                    }).then(user => {
                        return res.json({success: true, user: user});
                    }).catch(error => {
                        console.log("Error: ", error);
                    });
                });
            });
    });
};

const getListUsers = async (req, res, next) => {
    try {
        db.query('SELECT * FROM User', (err, users) => {
            if (err) throw err;
            console.log(users);
            res.json(users.map(user => {
                const {id, type, username, email} = user
                return {id, type, username, email}
            }))
        })
    } catch (err) {
        console.log(err)
        res.status(500).json({error: {message: 'Something is wrong!'}})
    }
}

module.exports = {
    login,
    register,
    getListUsers,
}
