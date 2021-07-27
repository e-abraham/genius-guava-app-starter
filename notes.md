# Code Reviews


## Roses

* Good, fun group experience. Seeing areas to improve (Ricardo)
* Using the taskboard to assign, delegate (Antony)
* Pair Programming, Mob Programming elevates problem solving and communication (Elizabeth)
* Team Collaboration feels like a good work simulation (Mushfika)

## Thorns

* How to use bootstrap effectively (Ricardo)
* CSS + Bootstrap (Antony + Elizabeth)
* Fixing errors can be time consuming (Mushfika)

## Task Board

* Love use of tags, keeping tasks small and bite size
* Good use of active kanban board
* Two things to consider:
	* Breaking subtasks by User Story, rather than Horizontal Slice
	* As an {X} I want to {Y} by {Z}
	* eg, As a User, I want to see all items in the inventory, by clicking the "All Items" navigation tab
		* Item Model
		* GET items route
		* allItems handlebars template
* Excellent semantic commits:
	* 2 parts
	* Nature of commit (add, debug, documentation, testing)
	* Description of what commit covers (models, routes, etc.)
	* e.g, Adds jest tests for Sequelize Order Model


## API

* Avoid commented out lines of code on main, master branches
* Great job testing Warehouse, Item models. Consider adding tests for the 1:many association
* Consider making Item Categories an ENUM. ('mens', 'womens', 'jewelery')
* Also consider adding a default Image to Items


## Front-end

* CSS — Cascading Style Sheets
* Move your style.css *below* bootstrap
* Boostrap: uses rows and columns
* `col-md-4` this item will take 4/12 of the cols per row
* Let's avoid inline styling when possible!


## Product Roadmap

### User Stories

* User can add Item to Warehouse by completing Add Form
	* Post Route for Items
	* Add Form in Handlebars


* User can Delete Item from Warehouse by clicking delete button
	* Delete Route
	* EITHER Form
```
	<form method="Delete">
		<button>X</button>
	</form>
```
	* OR Ajax on the DOM
	```
	let button = document.getElementById("deleteBtn")

	button.addEventListener('click', async (e) => {
		await fetch('/items', {method: Delete})
	})
	
	```

* Adding Post Route
```
app.post('/warehouse/:id/items', async (req, res) => {
	let newItem = await Item.create(req.body)
	let currWareHouse = await Warehouse.findByPk(req.params.id)
	currWareHouse.addItem(newItem)
	res.render('singleItem', {item: newItem})
})

```









