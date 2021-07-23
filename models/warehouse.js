const {Sequelize, DataTypes, Model} = require('sequelize')
const {sequelize} = require('../db')


class Warehouse extends Model {} //change to Inventory models

Warehouse.init({                 //change to Inventory models
    name: DataTypes.STRING,
    location: DataTypes.STRING,
}, {
    sequelize,
    timestamps: false,
});

module.exports = {Warehouse}; //change to export Inventory models