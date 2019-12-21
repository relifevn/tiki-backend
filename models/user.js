'use strict';
const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        id: {
            allowNull: false,
            autoIncrement: true,
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        credit_card_number: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        balance: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
        },
    }, {});
    User.associate = function (models) {
        // associations can be defined here
    };

    return User;
};
