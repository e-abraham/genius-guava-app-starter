# Code Review II

## Roses

* Working as a team, bouncing off ideas, debating them (Antony)
* Stepping away from the spaghetti on the wall (Ricardo)
* Working with git is getting better (Elizabeth)
* Learning from each other in Pairing (Elizabeth)
* Learning new tech and using it like Heroku (Mushfika)

## Thorns

* DELETE btn has been a mind-you-know-what (Antony)
* So much more to learn, so little time (Ricardo)
* Differentiating some of the scripting, lots of approaches (Elizabeth)
* Taking time to find the right keywords for google searches (Mushfika)

## Deployment

#### Bug with Delete

* Remove `<a>` wrapping button in item.handlebars and change to `<button type="button" class="btn btn-outline-dark" id="delete-btn" data-item="{{item.id}}" data-warehouse=""{{item.warehouseId}}>Delete Item</button>`

* In script.js
```js
const deleteBtn = document.getElementById('delete-btn')

deleteBtn.addEventListener('click', async (e) => {
  let id = deleteBtn.dataset.item;
  let warehouse = deleteBtn.dataset.warehouse
  await fetch(`/items/${id}`, {method : 'DELETE'});
  window.location.href = '/warehouses/' + warehouse
})
```	

* In app.js
```js
app.delete("/items/:id", async (req, res) => { //route to delete an item
    await Item.destroy({
        where : {id : req.params.id}
    })
    res.send("deleted")
})


```

* Dataset API: https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset


## Next Steps
* Get Delete Fix implemented
* Prep for presentations :)

