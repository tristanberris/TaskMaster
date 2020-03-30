import ListService from "../Services/ListService.js";
import _Lists from "../Models/List.js"
import _store from "../store.js"


//This might be done?
//TODO Don't forget to render to the screen after every data change.
function _drawLists() {
  let template = '';
  let lists = _store.State.lists

  lists.forEach(list => template += list.template)

  document.getElementById("listDraw").innerHTML = template;
  _drawItems();
}

function _drawItems() {
  // TODO Needs to render items from each list
  _store.State.lists.forEach(list => {
    let template = '';
    list.items.forEach((i, index) => {
      let itemTemplate = /*html*/ `
        <div class="col-10"> ${i} </div>
        <div class="col-2"> 
        <button type="button" class="close text-danger" onclick="app.listController.deleteItem('${index}', '${list.id}')">
        <span>&times;</span>
        </button>
        </div>
      `
      template += itemTemplate;
    })
    document.getElementById(`drawItem-${list.id}`).innerHTML = template;
  })
}




//Public
export default class ListController {
  constructor() {
    //NOTE: After the store loads, we can automatically call to draw the lists.
    _drawLists();

  }

  //TODO: Your app will need the ability to create, and delete both lists and listItems
  create(event) {
    event.preventDefault()
    let formData = event.target
    let newList = {
      title: formData.listName.value
    }


    ListService.create(newList)
    _drawLists()
    formData.reset()  
  }

  deleteItem(index, listId) {
    console.log("worked?")
    ListService.deleteItem(index, listId)
    _drawLists()
  }

  delete(listId) {
    console.log(listId)
    ListService.delete(listId)
    _drawLists();
  }






  addItem(event, listId) {
    event.preventDefault()
    // debugger
    let formData = event.target
    // let formId = listId.target
    let newItem = formData.itemName.value

    console.log(listId)
    ListService.addItem(newItem, listId)
    _drawLists()
    formData.reset()
  }
}
