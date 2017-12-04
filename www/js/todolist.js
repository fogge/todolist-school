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

  // Generell??
  moveUp(index){
    // Tar ut index-nummer från ett namn.
    let myObject = this.items[index];
    // Kollar om indexvärdet är först i listan
    if(index > 0){
      // Byter plats på indexen.
      this.items[index] = this.items[index - 1];
      this.items[index - 1] = myObject;
    }
  }

  // Generell??
  moveDown(index){
    // Tar ut index-nummer från ett namn.
    let myObject = this.items[index];
    // Kollar om indexvärdet är först i listan
    if(index + 1 < this.items.length){
      // Byter plats på indexen.
      this.items[index] = this.items[index + 1];
      this.items[index + 1] = myObject;
    }
  }

  // Generell
  moveTop(index){
      let myObject = this.items[index];
      this.removeWithIndex(index);
      this.addToTop(myObject);
    }
    
  // Generell?
  moveBot(index){
      let myObject = this.items[index];
      this.removeWithIndex(index);
      this.add(myObject);
    }

}
