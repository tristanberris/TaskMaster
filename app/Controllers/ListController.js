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
}

//Public
export default class ListController {
  constructor() {
    //NOTE: After the store loads, we can automatically call to draw the lists.
    _drawLists();
  }

  //TODO: Your app will need the ability to create, and delete both lists and listItems
  create(event){
    event.preventDefault()
    let formData = event.target
    let newList = {
      title: formData.listName.value
    }

    ListService.create(newList)
    _drawLists()
    // console.log(_drawLists())
    // console.log(formData)
    formData.reset()
  }

  delete(listId){
    console.log(listId)
    ListService.delete(listId)
    _drawLists();

    
  }


  addItem(event, listId){
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
