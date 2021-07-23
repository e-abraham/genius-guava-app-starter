const {Sequelize, DataTypes, Model} = require('sequelize')
const {sequelize} = require('../db')


class Item extends Model {} //change to Inventory models

Item.init({                 //change to Inventory models
    title: DataTypes.STRING,
    price: DataTypes.FLOAT(2),
    description: DataTypes.TEXT,
    category: DataTypes.STRING,
    image: DataTypes.STRING,
}, {
    sequelize,
    timestamps: false,
});

module.exports = {Item}; //change to export Inventory models