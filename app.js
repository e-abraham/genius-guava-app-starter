const express = require('express');
const Handlebars = require('handlebars');
const expressHandlebars = require('express-handlebars');
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access');

// the 

const {sequelize} = require('./db');
const {Item, Warehouse} = require('./models/index'); //change to Inventory models
const seed = require('./seed')

const PORT = process.env.PORT || 3000; //maybe change port to 8080

const app = express();

// setup our templating engine
const handlebars = expressHandlebars({
    handlebars: allowInsecurePrototypeAccess(Handlebars)
})
app.engine('handlebars', handlebars);
app.set('view engine', 'handlebars');

// serve static assets from the public/ folder
app.use(express.static('public'));

app.use(express.json());
app.use(express.urlencoded());
//need this or else req.body will be an {}

seed();

app.get('/warehouses', async (req, res) => { //route to all inventory items, including programming langs books
    const warehouses = await Warehouse.findAll()
    res.render('warehouses', {warehouses}); //points to warehouses handlebar
    //res.json({ warehouse }) // without handlebars 
    //res.send('created')
})

app.get('/warehouses/:id', async (req, res) => { //route to individual inventory items
    const warehouse = await Warehouse.findByPk(req.params.id,{include: {
        model: Item,
    },
})
    res.render('warehouse', {warehouse}); 
    //res.json({ warehouse })
})

app.get('/homepage',  (req, res) => {
    res.render("home");//points to new item form handlebar
})
// app.get('/items', async (req, res) => { //route to all inventory items, including programming langs books
//     const items = await Item.findAll()
//     // res.render('items', {items}); //points to items handlebar
//     // res.json({ items }) // without handlebars 
//     // res.send('created')
// })

app.get('/items/:id', async (req, res) => { //route to individual inventory items
    const item = await Item.findByPk(req.params.id)
    res.render('item', {item}); 
    //res.json({ item })
})

app.get("/new-item-form", (req, res) => { //route to new item form
    res.render("newItemForm") //points to new item form handlebar
})


//request url must match form action url
app.post('/new-item', async (req, res) => {
    let newItem = await Item.create(req.body)
    console.log("new Item", newItem); //view property values

    switch (newItem.category){
        case "Women's Clothing":
            warehouseId = 1;
            break;
        case "Men's Clothing":
            warehouseId = 1;
            break;
        case "Jewelery":
            warehouseId = 2;
            break;
        case "Electronics":
            warehouseId = 3;
            break;
        default:
            alert = "This warehouse does not exist";
    }

    let currWareHouse = await Warehouse.findByPk(warehouseId)
    currWareHouse.addItem(newItem)

    const foundItem = await Item.findByPk(newItem.id); //check item is created in database
    console.log("found Item", foundItem);
    
    res.render('item', {item: foundItem});    
    
})





// !! add more routes here !!

app.listen(PORT, () => {
    sequelize.sync({force: true});
    console.log(`Your server is running on http://localhost:${PORT}`);
})