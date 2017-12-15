class TodoItem {
  constructor(_description){
    this.description = _description;
    this.createdAt = new Date().toLocaleDateString();
    this.completed = false;
  }

  print() {
    let printText = `<h6>Date: [${this.createdAt}]</h6>`
    printText += `<p><span class="h6">What to do: </span>${this.description}</p>`;
    return printText;
  }

}
