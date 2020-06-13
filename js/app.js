document.addEventListener('DOMContentLoaded', () =>{
  const newItemForm = document.querySelector('#new-item-form')
  newItemForm.addEventListener('submit', handleNewItemFormSubmit);

  const button = document.querySelector('.delete');
  button.addEventListener('click', deleteAllSavedData);
})

const handleNewItemFormSubmit = function(event){
  event.preventDefault()

  //create reading list item from submit event
   const savedListItem = createSavedListItem(event.target);

  //get saved list id from html
   const savedList = document.querySelector('#saved-for-later');

  //add item to saved list
  savedList.appendChild(savedListItem);

event.target.reset();
}

const createSavedListItem = function(form){
  //create list item
  const savedListItem = document.createElement('li');
//add to saved list
  savedListItem.classList.add('saved-for-later');

  const title = document.createElement('h2');
  title.textContent = form.title.value;
  savedListItem.appendChild(title);

  const link = document.createElement('h3');
  link.textContent = form.link.value;
  savedListItem.appendChild(link);

  const category = document.createElement('p');
  category.textContent = form.category.value;
  savedListItem.appendChild(category);

  return savedListItem;
}

const deleteAllSavedData = function(event){
  const deleteAll = document.getElementById('saved-for-later')
  while (deleteAll.hasChildNodes()){
    deleteAll.removeChild(deleteAll.firstChild);
  }
}
