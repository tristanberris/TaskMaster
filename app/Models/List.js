import { generateId } from "../utils.js";

export default class List {
  constructor(data) {
    //TODO Your constructor takes in a data object that should have the properties you need to create your list. here is a freebie, it will set the id its provided, 
    // or if that is undefined it will create a new one (this is an alternative to object destructuring)
    this.title = data.title;
    // this.item = data.item
    /** @type {Items[]} */
    this.items = data.items || []
    //maybe put this in store?
    // /**@type {List[]} */
    // this.lists = []


    this.id = data.id || generateId();
  }
  //Be sure to add the methods needed to create the view template for this model
  //For starting out, your tasks may be strings alone, but later you may wish to turn them into full objects, that will be up to you

  get template() {

    return /*html*/`
    <div class="col-4">
    <div class="card" style="">
      <div class="card-body">
        <h5 class="card-title">${this.title}</h5>
        <button type="button" class="close text-danger" onclick="app.listController.delete('${this.id}')">
        <span>&times;</span>
        </button>
        <form onsubmit="app.listController.addItem(event, '${this.id}')" class= "needs-validation">
          <div class="form-group">
              <label for="itemName"></label>
              <input type="text" name="itemName" class="form-control" placeholder="Add task..." required>
          </div>
          
          
          <button type="submit" class="btn btn-primary mb-2 ">Add task!</button>
          </form>
          <div class="card-text row" id="drawItem-${this.id}">
          
      </form>
          </div>
          </div>
  </div>
  </div>  
  </div>
    `
  }

  //delete item using stored index below
  get Items() {
    let template = ''
    this.items.forEach((item) => template += item)
    //[1,2,3]
    console.log("test")
    return template
  }

}
