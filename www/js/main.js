let todoList = new TodoList([]);

let doneList = new DoneList([]);

// Loopar genom todoList med of-loop
function loopMyToDoList(){
  $('.my-chore-list').empty();
  for (let chore of todoList.items) {
    $('.my-chore-list').append(`
      <li class="list-group-item">
        ${chore.print()}
      </li>
      `);
    }
}

function loopMyDoneList(){
  $('.done-chore-list').empty();
  for (let chore of doneList.items) {
    $('.done-chore-list').append(`
      <li class="list-group-item">
        ${chore.print()}
      </li>
      `);
    }
}

// Knapptryckning för lägg till längst ner i to-do-lista
$('#add-last-button').on('click', function(){
  const myText = $('#add-chore-to-list').val();
  const myItem = new TodoItem(myText);
  todoList.add(myItem);
  loopMyToDoList();
});

// Knapptryckning för lägg till högst upp i to-do-lista
$('#add-to-top-button').on('click', function(){
  const myText = $('#add-chore-to-list').val();
  const myItem = new TodoItem(myText);
  todoList.addToTop(myItem);
  loopMyToDoList();
});

// Knapptryckning ta bort sist i to-do-listan
$('#remove-last-button').on('click', function(){
  todoList.removeFromBottom();
  loopMyToDoList();
});


// Knapptryckning ta bort sist i to-do-listan
$('#remove-first-button').on('click', function(){
  todoList.removeFromTop();
  loopMyToDoList();
});

// Ta bort med hjälp av indexnummer
function removeFromListByIndex(index){
  if (index >= 0) {
  return todoList.items.splice(index, 1)[0];
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
  for (let i = 0; i < todoList.items.length; i++) {
   if(todoList.items[i].description === indexName) {
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
  let myObject = todoList.items[index];
  doneList.items.push(myObject);
  removeFromListByIndex(index);
  return doneList.items;
}

// Knapptryck för flytt från to-do till done
$('#remove-from-list-and-add-button').on('click', function(){
  let indexName = $('#remove-and-add-to-done').val();
  removeFromListAndAddToDone(indexName);
  loopMyToDoList();
  loopMyDoneList();
});



//
// // Ta bort från listan och lägg till returnerade värdet till toppen av listan.
// function moveToTop(item){
//   addToTopOfList(removeFromListByName(item));
//   return todoList.items;
// }
// // Knapptryck för flytt till toppen av listan.
// $('#move-to-top-button').on('click', function(){
//   let index = $('#move-index').val();
//   moveToTop(index);
//   loopMyToDoList();
//   loopMyDoneList();
// });
// // Ta bort från listan och lägg till returnerade värdet till botten av listan.
// function moveToBottom(item){
//   addToList(removeFromListByName(item));
//   return todoList.items;
// }
// // Knapptryck för flytt till botten av listan.
// $('#move-to-bottom-button').on('click', function(){
//   let index = $('#move-index').val();
//   moveToBottom(index);
//   loopMyToDoList();
//   loopMyDoneList();
// });
//
// // Flytta ner ett steg.
// function moveDown(item){
//   // Tar ut index-nummer från ett namn.
//   let index = todoList.items.indexOf(item);
//   // Kollar om indexvärdet är först i listan
//   if(index + 1 < todoList.items.length){
//     // Byter plats på indexen.
//     todoList.items[index] = todoList.items[index + 1];
//     todoList.items[index + 1] = item;
//   }
//   return todoList.items;
// }
//
// // Knapptryck för flytt en ner.
// $('#move-down-button').on('click', function(){
//   let index = $('#move-index').val();
//   moveDown(index);
//   loopMyToDoList();
//   loopMyDoneList();
// });
//
// // Flytta upp ett steg.
// function moveUp(item){
//   // Tar ut index-nummer från ett namn.
//   let index = todoList.items.indexOf(item);
//   // Kollar om indexvärdet är först i listan
//   if(index > 0){
//     // Byter plats på indexen.
//     todoList.items[index] = todoList.items[index - 1];
//     todoList.items[index - 1] = item;
//   }
//   return todoList.items;
// }
//
// // Knapptryck för flytt en upp.
// $('#move-up-button').on('click', function(){
//   let index = $('#move-index').val();
//   moveUp(index);
//   loopMyToDoList();
//   loopMyDoneList();
// });
