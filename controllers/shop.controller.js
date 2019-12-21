const db = require('../db');
const Shop = require('../models').Shop;

const create = async (req, res, next) => {
    let user = req.userData;
    Shop.findOne({where: {userId: user.id}})
        .then(shop => {
            if (shop) {
                return res.json({
                    success: false,
                    message: "Already have shop!"
                })
            }
            Shop.create({
                name: req.body.name,
                location: req.body.location,
                phone: req.body.phone,
                userId: user.id
            })
                .then(shop => {
                    return res.json({
                        success: true,
                        data: shop
                    })
                })
                .catch(err => {
                    res.json({
                        success: false,
                        error: err
                    });
                })
        })
        .catch(err => {
            res.json({
                success: false,
                error: err
            });
        });
};

const getOwnShop = async (req, res, next) => {
    let user = req.userData;
    Shop.findOne({where: {userId: user.id}})
        .then(
            shop => {
                return res.json({
                    success: true,
                    data: shop
                })
            }
        )
        .catch(err => {
            res.json({
                success: false,
                error: err
            });
        });
};


module.exports = {
    create,
    getOwnShop
};
