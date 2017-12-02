let todoList = new TodoList([]);

let doneList = new DoneList([]);


// Loopar genom todoList med of-loop
function updateListView(list, listSelector){
  let $myList = $(listSelector);
  $myList.empty();
  for (let i = 0; i < list.items.length; i++) {
    let chore = list.items[i];
    $myList.append(`
      <li class="list-group-item" data-index="${i}">
        ${chore.print()}
       <button class="btn btn-danger float-right deletebutton" id="deleteButton-${i}">X</button>
      </li>
      `);
    }
    $myList.find('.deletebutton').on('click', function(){
      console.log('du klickade mig');

    });

}

function updateAllViews() {
  updateListView(todoList, '.todo-chore-list');
  updateListView(doneList, '.done-chore-list');
}


// Knapptryckning för lägg till längst ner i to-do-lista
$('#add-last-button').on('click', function(){
  const myText = $('#add-chore-to-list').val();
  const myItem = new TodoItem(myText);
  todoList.add(myItem);
  updateAllViews();
});

// Knapptryckning för lägg till högst upp i to-do-lista
$('#add-to-top-button').on('click', function(){
  const myText = $('#add-chore-to-list').val();
  const myItem = new TodoItem(myText);
  todoList.addToTop(myItem);
  updateAllViews();
});

// Knapptryckning ta bort sist i to-do-listan
$('#remove-last-button').on('click', function(){
  todoList.removeFromBottom();
  updateAllViews();
});


// Knapptryckning ta bort sist i to-do-listan
$('#remove-first-button').on('click', function(){
  todoList.removeFromTop();
  updateAllViews();
});

// Knapptryckning ta bort med index-nummer
$('#remove-with-index-number-button').on('click', function(){
  let index = $('#remove-chore-from-index').val();
  todoList.removeWithIndex(index);
  updateAllViews();
});


// Knapptryckning ta bort med hjälp av indexnamn
$('#remove-with-name-button').on('click', function(){
  const indexName = $('#remove-chore-from-index').val();
  todoList.removeByName(indexName);
  updateAllViews();
});

// Knapptryck för flytt från to-do till done
$('#remove-from-list-and-add-button').on('click', function(){
  let indexName = $('#remove-and-add-to-done').val();
  let index = todoList.findIndexByName(indexName);
  let myObject = todoList.items[index];
  doneList.items.push(myObject);
  todoList.removeWithIndex(index);
  updateAllViews();
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
