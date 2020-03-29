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
      // let newItem = new List(newItemData)
      //issue below v
      
      let list = _store.State.lists.find(list => list.id == listId)
      // console.log(list)
      // List.items.push(newItemData)
      
      // console.log(list)
      // _store.saveState()
      console.log(_store.State.lists)
      list.items.push(newItemData)
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
