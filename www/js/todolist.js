class TodoList {
  // _items är en array
  constructor(_items){
    this.items = _items;
  }

  add(item) {
    todoList.items.push(item);
    return todoList.items;
  }

  addToTop(item) {
    todoList.items.unshift(item);
    return todoList.items;
  }

}
