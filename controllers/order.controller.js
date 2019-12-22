const db = require('../db/index');
const Order = require('../models').Order;
const Product = require('../models').Product;

const create = async (req, res, next) => {
    let user = req.userData;
    Product.findOne({where: {id: req.body.product_id}})
        .then(product => {
                if (!product)
                    return res.json({
                        success: false,
                        message: "Product is not exist!"
                    });
                Order.create({
                    productId: product.id,
                    customerId: user.id,
                    count: req.body.count,
                    location: req.body.location
                }).then(order => {
                    return res.json({
                        success: true,
                        data: order
                    })
                }).catch(err => {
                    return res.json({
                        success: false,
                        message: err
                    })
                })
            }
        )
};

const changeState = async (req, res, next) => {
    let user = req.userData;
    let orderId = req.param("id");
    Order.findOne({where: {id: orderId}})
        .then(order => {
            if (!order)
                return res.json({
                    success: false,
                    message: "Order is not exist"
                });
            order.update({
                state: req.body.state
            })
                .then(order => {
                    return res.json({
                        success: true,
                        data: order
                    })
                })
                .catch(err => {
                    return res.json({
                        success: false,
                        message: err
                    })
                })
        })
        .catch(err => {
            return res.json({
                success: false,
                message: err
            })
        });
};


module.exports = {
    create,
    changeState
};
