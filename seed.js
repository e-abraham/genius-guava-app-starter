const path = require('path');
const fs = require('fs').promises;

const {sequelize} = require('./db');
const {Item, Warehouse} = require('./models/index'); //change to Inventory models


const seed = async () => {

    await sequelize.sync({ force: true });

    const seedPath = path.join(__dirname, 'inventory.json'); // creates path to seed data
    const buffer = await fs.readFile(seedPath); // reads json
    const warehouses = JSON.parse(String(buffer)); //parses data
    for (const warehouseData of warehouses) {
        const warehouse = await Warehouse.create(warehouseData);
        for (const itemData of warehouseData.items) {
            const item = await Item.create(itemData);
            await warehouse.addItem(item);
        }
    }

    // const dataPromises = data.map(item => Item.create(item)) //change Sauce to Inventory models
    // await Promise.all(dataPromises)
    console.log("db populated!")
}


module.exports = seed