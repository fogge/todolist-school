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
