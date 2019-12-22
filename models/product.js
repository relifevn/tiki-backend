'use strict';
module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define('Product', {
        id: {
            allowNull: false,
            autoIncrement: true,
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        price: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
        },
        categoryId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        shopId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        brand: {
            type: DataTypes.STRING,
            allowNull: true
        },
        countAvailable: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        }
    }, {});
    Product.associate = function (models) {
        // associations can be defined here
    };
    return Product;
};
