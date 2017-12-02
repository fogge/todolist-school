let todoList = [];
let doneList = [];

// Loopar genom todoList med of-loop
function loopMyToDoList(){
  $('.my-chore-list').empty();
  for (let chore of todoList) {
    $('.my-chore-list').append(`
      <li class="list-group-item">
        ${chore.print()}
      </li>
      `);
    }
}

function loopMyDoneList(){
  $('.done-chore-list').empty();
  for (let chore of doneList) {
    $('.done-chore-list').append(`
      <li class="list-group-item">
        ${chore.print()}
      </li>
      `);
    }
}

// Lägg till längst ner i to-do-lista
function addToList(item) {
  todoList.push(item);
  return todoList;
}
// Knapptryckning för lägg till längst ner i to-do-lista
$('#add-last-button').on('click', function(){
  const myText = $('#add-chore-to-list').val();
  const myItem = new TodoItem(myText);
  addToList(myItem);
  loopMyToDoList();
});

// Lägg till högst upp i to-do-lista
function addToTopOfList(item) {
  todoList.unshift(item);
  return todoList;
}

// Knapptryckning för lägg till högst upp i to-do-lista
$('#add-to-top-button').on('click', function(){
  const myText = $('#add-chore-to-list').val();
  const myItem = new TodoItem(myText);
  addToTopOfList(myItem);
  loopMyToDoList();
});

// Ta bort sist i to-do-listan
function removeFromBottomOfList(){
  return todoList.pop();
}

// Knapptryckning ta bort sist i to-do-listan
$('#remove-last-button').on('click', function(){
  removeFromBottomOfList();
  loopMyToDoList();
});

// Ta bort sist i to-do-listan
function removeFromTopOfList(){
  return todoList.shift();
}

// Knapptryckning ta bort sist i to-do-listan
$('#remove-first-button').on('click', function(){
  removeFromTopOfList();
  loopMyToDoList();
});

// Ta bort med hjälp av indexnummer
function removeFromListByIndex(index){
  if (index >= 0) {
  return todoList.splice(index, 1)[0];
  }
}
// Knapptryckning ta bort med index-nummer
$('#remove-with-index-number-button').on('click', function(){
  let index = $('#remove-chore-from-index').val();
  removeFromListByIndex(index);
  loopMyToDoList();
});


// Find index by description
function findIndexByName(indexName){
  let index;
  for (let i = 0; i < todoList.length; i++) {
   if(todoList[i].description === indexName) {
     index = i;
   };
 }
 return index;
}

// Ta bort med hjälp av indexnamn
function removeFromListByName(indexName) {
 let index = findIndexByName(indexName);
 return removeFromListByIndex(index);
}

// Knapptryckning ta bort med hjälp av indexnamn
$('#remove-with-name-button').on('click', function(){
  const indexName = $('#remove-chore-from-index').val();
  removeFromListByName(indexName);
  loopMyToDoList();
});

// Ta bort från to-do och lägg till till done
function removeFromListAndAddToDone(indexName){
  let index = findIndexByName(indexName);
  let myObject = todoList[index];
  doneList.push(myObject);
  removeFromListByIndex(index);
  return doneList;
}

// Knapptryck för flytt från to-do till done
$('#remove-from-list-and-add-button').on('click', function(){
  let indexName = $('#remove-and-add-to-done').val();
  removeFromListAndAddToDone(indexName);
  loopMyToDoList();
  loopMyDoneList();
});

// Ta bort från listan och lägg till returnerade värdet till toppen av listan.
function moveToTop(item){
  addToTopOfList(removeFromListByName(item));
  return todoList;
}
// Knapptryck för flytt till toppen av listan.
$('#move-to-top-button').on('click', function(){
  let index = $('#move-index').val();
  moveToTop(index);
  loopMyToDoList();
  loopMyDoneList();
});
// Ta bort från listan och lägg till returnerade värdet till botten av listan.
function moveToBottom(item){
  addToList(removeFromListByName(item));
  return todoList;
}
// Knapptryck för flytt till botten av listan.
$('#move-to-bottom-button').on('click', function(){
  let index = $('#move-index').val();
  moveToBottom(index);
  loopMyToDoList();
  loopMyDoneList();
});

// Flytta ner ett steg.
function moveDown(item){
  // Tar ut index-nummer från ett namn.
  let index = todoList.indexOf(item);
  // Kollar om indexvärdet är först i listan
  if(index + 1 < todoList.length){
    // Byter plats på indexen.
    todoList[index] = todoList[index + 1];
    todoList[index + 1] = item;
  }
  return todoList;
}

// Knapptryck för flytt en ner.
$('#move-down-button').on('click', function(){
  let index = $('#move-index').val();
  moveDown(index);
  loopMyToDoList();
  loopMyDoneList();
});

// Flytta upp ett steg.
function moveUp(item){
  // Tar ut index-nummer från ett namn.
  let index = todoList.indexOf(item);
  // Kollar om indexvärdet är först i listan
  if(index > 0){
    // Byter plats på indexen.
    todoList[index] = todoList[index - 1];
    todoList[index - 1] = item;
  }
  return todoList;
}

// Knapptryck för flytt en upp.
$('#move-up-button').on('click', function(){
  let index = $('#move-index').val();
  moveUp(index);
  loopMyToDoList();
  loopMyDoneList();
});
