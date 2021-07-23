const {Warehouse} = require('./warehouse'); //change to Inventory models
const {sequelize} = require('../db');

describe('Warehouse Model', () => {		//change test to Inventory models
	beforeAll(async () => {
		await sequelize.sync({force: true})
	});

	test('can create a Warehouse', async() => {
		const testWarehouse = await Warehouse.create({name : 'Macys', location : 'Irving'})
		expect(testWarehouse.name).toBe('Macys')
	})

	test('can create a Warehouse', async() => {
		const testWarehouse = await Warehouse.create({name : 'Macys', location : 'Irving'})
		expect(testWarehouse.id).toBe(2)
	})



})