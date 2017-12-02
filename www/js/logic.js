class TodoList {

  // _items är en array
  constructor(_items){
    this.items = _items;
  }
}

class DoneList {
  // _items är en array
  constructor(_items){
  this.items = _items;
  }
}

class TodoItem {
  constructor(_description){
    this.description = _description;
    this.createdAt = new Date();
    this.completed = false;
  }

  print() {
    let printText = `[ ${this.createdAt.toLocaleDateString()} ] ${this.description}`;
    return printText;
  }
}
