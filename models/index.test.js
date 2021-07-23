const {Item} = require('./index'); //change to Inventory models
const {sequelize} = require('../db');

describe('Item Model', () => {		//change test to Inventory models
	beforeAll(async () => {
		await sequelize.sync({force: true})
	});

	test('can create a Item', async() => {
		const testItem = await Item.create({title : 'Red Tie', price: 68.90, description: 'Stylish tie', category: 'men\'s clothing', image: 'url.png'})
		console.log(testItem.category)
		expect(testItem.title).toBe('Red Tie') 
		expect(testItem.price).toBe(68.90)
		expect(testItem.description).toBe('Stylish tie')
		expect(testItem.category).toBe('men\'s clothing')
		expect(testItem.image).toBe('url.png')
	})


})