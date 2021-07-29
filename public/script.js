//Get the button:
mybutton = document.getElementById("back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.visibility = "block";
  } else {
    mybutton.style.visibility = "hidden";
  }
}

mybutton.addEventListener("click", backToTop);

// When the user clicks on the button, scroll to the top of the document
function backToTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

const deleteBtn = document.getElementById('delete-btn')

deleteBtn.addEventListener('click', async (e) => {
  let id = deleteBtn.dataset.item;
  let warehouse = deleteBtn.dataset.warehouse
  await fetch(`/items/${id}`, {method : 'DELETE'});
  window.location.href = '/warehouses/' + warehouse
})

