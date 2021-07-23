const express = require('express');
const Handlebars = require('handlebars');
const expressHandlebars = require('express-handlebars');
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access');



const {sequelize} = require('./db');
const {Item, Warehouse} = require('./models/index'); //change to Inventory models
const seed = require('./seed')

const PORT = 3000; //maybe change port to 8080

const app = express();

// setup our templating engine
const handlebars = expressHandlebars({
    handlebars: allowInsecurePrototypeAccess(Handlebars)
})
app.engine('handlebars', handlebars);
app.set('view engine', 'handlebars');

// serve static assets from the public/ folder
app.use(express.static('public'));

seed();

app.get('/warehouses', async (req, res) => { //route to all inventory items, including programming langs books
    const warehouse = await Warehouse.findAll()
    //res.render('warehouse', {warehouses}); //points to warehouses handlebar
    res.json({ warehouse }) // without handlebars 
    res.send('created')
})

app.get('/warehouses/:id', async (req, res) => { //route to individual inventory items
    const warehouse = await Warehouse.findByPk(req.params.id)
    //res.render('sauce', {sauce}); 
    res.json({ warehouse })
})

app.get('/items', async (req, res) => { //route to all inventory items, including programming langs books
    const items = await Item.findAll()
    //res.render('items', {items}); //points to items handlebar
    res.json({ items }) // without handlebars 
    res.send('created')
})

app.get('/items/:id', async (req, res) => { //route to individual inventory items
    const item = await Item.findByPk(req.params.id)
    //res.render('item', {item}); 
    res.json({ item })
})




// !! add more routes here !!


app.listen(PORT, () => {
    sequelize.sync({force: true});
    console.log(`Your server is running on http://localhost:${PORT}`);
})