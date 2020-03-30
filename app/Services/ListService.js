import List from "../Models/List.js";
import _store from "../store.js"
//Public
class ListService {
  //TODO  Here is where we handle all of our business logic,
  //given the information you need in the controller,
  //what methods will you need to do when this class is first 'constructed'?
  //NOTE You will need this code to persist your data into local storage, 
    //be sure to call the store method to save after each change

    addItem(newItemData, listId){
    
      
      let list = _store.State.lists.find(list => list.id == listId)

      console.log(_store.State.lists)
      list.items.push(newItemData)
      _store.saveState()
    }

    delete(listId) {
      
      //NOTE Delete by index instead
      let index = _store.State.lists.findIndex(list => list.id == listId)
      _store.State.lists.splice(index, 1)
      //add window.confirm
  
      //NOTE remove by filtering all the pizzas whose id we are not deleting
      // _store.State.pizzas = _store.State.pizzas.filter(pizza => pizza.id != pizzaId)
      _store.saveState()
    }

    deleteItem(index, listId){
      // console.log('index = ', index, 'listID =', listId)
      let listIndex = _store.State.lists.findIndex(list => list.id == listId)
      _store.State.lists[listIndex].items.splice(index, 1)
      _store.saveState()
    }

    create(newListData){
      let newList = new List(newListData)
      _store.State.lists.push(newList)
      console.log(_store.State.pizzas)
      _store.saveState()
    }

}

const SERVICE = new ListService();
export default SERVICE;
