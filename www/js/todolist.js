class TodoList {
  // _items är en array
  constructor(_items){
    this.items = _items;
  }

  add(item) {
    this.items.push(item);
    return this.items;
  }

  addToTop(item) {
    this.items.unshift(item);
    return this.items;
  }

  removeFromBottom(){
    return this.items.pop();
  }

  removeFromTop(){
    return this.items.shift();
  }

  // Generell?
  removeWithIndex(index){
    if (index >= 0) {
    return this.items.splice(index, 1)[0];
    }
  }

  // Generell?
  findIndexByName(indexName){
    let index;
    for (let i = 0; i < this.items.length; i++) {
     if(this.items[i].description === indexName) {
       index = i;
     };
   }
    return index;
  }

  removeByName(indexName) {
   let index = this.findIndexByName(indexName);
   return this.removeByName(index);
  }
}
