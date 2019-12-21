const db = require('../db');
const Category = require('../models').Category;

const list = async (req, res, next) => {
    Category.findAll({})
        .then(list_category => {
            res.json({
                success: false,
                categories: list_category
            });
        })
        .catch(err => {
            console.log(err);
            res.json({
                success: false,
                error: err
            });
        });

};


module.exports = {
    list,
};
