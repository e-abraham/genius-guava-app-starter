const {Sequelize, DataTypes, Model} = require('sequelize')
const {sequelize} = require('../db')
const {Warehouse} = require('./warehouse');
const {Item} = require('./item');

Warehouse.hasMany(Item)
Item.belongsTo(Warehouse)






module.exports = {Item, Warehouse}; //change to export Inventory models