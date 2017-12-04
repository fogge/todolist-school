class DoneList {
  // _items är en array
  constructor(_items){
  this.items = _items;
  }

  // Generell??
  removeWithIndex(index){
    if (index >= 0) {
    return this.items.splice(index, 1)[0];
    }
  }
}
