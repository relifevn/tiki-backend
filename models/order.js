'use strict';
module.exports = (sequelize, DataTypes) => {
    const Order = sequelize.define('Order', {
        id: {
            allowNull: false,
            autoIncrement: true,
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        productId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        customerId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        count: {
            type: DataTypes.INTEGER,
            defaultValue: 1,
        },
        state: {
            type: DataTypes.STRING,
            defaultValue: 'NEW',
        },
        location: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    }, {});
    Order.associate = function (models) {
        // associations can be defined here
    };
    return Order;
};
