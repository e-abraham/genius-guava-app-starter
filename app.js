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

app.get('/sauces', async (req, res) => { //route to all inventory items, including programming langs books
    const sauces= await Sauce.findAll()
    res.render('sauces', {sauces}); //points to sauces handlebar
})

app.get('/sauces/:id', async (req, res) => { //route to individual inventory items
    const sauce = await Sauce.findByPk(req.params.id)
    res.render('sauce', {sauce}); 
})

// !! add more routes here !!

app.listen(PORT, () => {
    sequelize.sync({force: true});
    console.log(`Your server is running on http://localhost:${PORT}`);
})