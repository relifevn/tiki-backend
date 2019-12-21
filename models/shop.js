'use strict';
module.exports = (sequelize, DataTypes) => {
    const Shop = sequelize.define('Shop', {
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
        location: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    }, {});
    Shop.associate = function (models) {
        // associations can be defined here
    };
    return Shop;
};
