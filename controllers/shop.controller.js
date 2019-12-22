const db = require('../models/index');
const Shop = require('../models').Shop;
const Product = require('../models').Product;
const Sequelize = require('sequelize');

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

const remove = async (req, res, next) => {
    let user = req.userData;

    return db.sequelize.transaction(t => {
        Shop.findOne({where: {userId: user.id}}, {transaction: t})
            .then(shop => {
                if (shop) {
                    Product.findOne({where: {shopId: shop.id}}, {transaction: t}).then(product => {
                        product.destroy()
                    });
                    shop.destroy();
                }
            })
    }).then(result => {
        return res.json({
            success: true,
            message: 'Remove shop success'
        })
    }).catch(err => {
        console.log(err);
        return res.json({
            success: false,
            message: err
        })
    });
};

const search = async (req, res, next) => {
    let search = req.query.search;
    if (!search)
        search = '';
    Shop.findAll({
        where: {
            name: {
                [db.Sequelize.Op.like]: '%' + search + '%'
            }
        }
    }).then(shops => {
        return res.json({
            success: true,
            data: shops
        })
    }).catch(err => {
        console.log("err", err);
        return res.json({
            success: false,
            message: err
        })
    })
};


module.exports = {
    create,
    getOwnShop,
    remove,
    search
};
