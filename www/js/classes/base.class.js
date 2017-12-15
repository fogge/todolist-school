class BaseList {

  add(item) {
    this.items.push(item);
    return this.items;
  }

  addMany(items){
    for (let i = 0; i < items.length; i++){
      let item = new TodoItem();
      item.description = items[i].description;
      item.createdAt = items[i].createdAt;
      item.completed = items[i].completed;
      this.add(item);
    }
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

  removeWithIndex(index){
    if (index >= 0) {
    return this.items.splice(index, 1)[0];
    }
  }

  removeAll(){
    this.items.length = 0;
  }

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

  moveTop(index){
    let myObject = this.items[index];
    this.removeWithIndex(index);
    this.addToTop(myObject);
  }

  moveBot(index){
    let myObject = this.items[index];
    this.removeWithIndex(index);
    this.add(myObject);
  }

  loadJSON(listFileName, callback){
    JSON._load(listFileName)
    .then((data) => {
      this.removeAll();
      this.addMany(data.items);
      callback(data.items);
    });
  }

  saveJSON(listFileName){
    JSON._save(listFileName, {
        items: this.items
    });
  }

}
