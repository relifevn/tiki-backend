const db = require('../models/index');
const Product = require('../models').Product;
const Shop = require('../models').Shop;

const create = async (req, res, next) => {
    let user = req.userData;
    Shop.findOne({where: {userId: user.id}})
        .then(shop => {
            if (!shop)
                return res.json({
                    success: false,
                    message: "Shop is not exist"
                });
            Product.create({
                name: req.body.name,
                price: req.body.price,
                categoryId: req.body.category_id,
                shopId: shop.id,
                description: req.body.description,
                brand: req.body.brand,
                countAvailable: req.body.count_available
            })
                .then(product => {
                    return res.json({
                        success: true,
                        data: product
                    })
                })
        })
};

const update = async (req, res, next) => {
    let user = req.userData;
    Shop.findOne({where: {userId: user.id}})
        .then(shop => {
            if (!shop)
                return res.json({
                    success: false,
                    message: "Shop is not exist"
                });
            Product.findOne({
                where: {
                    shopId: shop.id,
                    id: req.body.id
                }
            }).then(product => {
                if (!product)
                    return res.json({
                        success: false,
                        message: "Product is not exist"
                    });
                product.update({
                    name: req.body.name,
                    price: req.body.price,
                    categoryId: req.body.category_id,
                    description: req.body.description,
                    brand: req.body.brand,
                    countAvailable: req.body.count_available
                }).then(product => {
                    return res.json({
                        success: true,
                        data: product
                    })
                });
            });
        })
};

const remove = async (req, res, next) => {
    let user = req.userData;
    let productId = req.param("id");
    Shop.findOne({where: {userId: user.id}})
        .then(shop => {
            if (!shop)
                return res.json({
                    success: false,
                    message: "Shop is not exist"
                });
            Product.findOne({
                where: {
                    shopId: shop.id,
                    id: productId
                }
            }).then(
                product => {
                    if (!product)
                        return res.json({
                            success: false,
                            message: "Product is not exist"
                        });
                    product.destroy()
                        .then(() => {
                            return res.json({
                                success: true,
                                message: 'Remove product success'
                            })
                        })
                }
            )
        })
};

const search = async (req, res, next) => {
    let search = req.query.search;
    if (!search)
        search = '';
    Product.findAll({
        where: {
            name: {
                [db.Sequelize.Op.like]: '%' + search + '%'
            }
        }
    }).then(products => {
        return res.json({
            success: true,
            data: products
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
    update,
    remove,
    search
};
