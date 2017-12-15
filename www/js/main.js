let todoList = new TodoList([]);
let doneList = new DoneList([]);


function updateListView(list, listSelector){
  let $myList = $(listSelector);

  // Loopar ut och skapar html-kod för li-element och knapp.
  $myList.empty();
  for (let i = 0; i < list.items.length; i++) {
    let chore = list.items[i];
    $myList.append(`
      <li class="list-group-item pl-0 pr-1 d-flex col-12">
       <div class="col-9">${chore.print()}</div>
       <div class="col-3 d-inline-flex p-0 justify-content-end">
         <div class="btn-group-vertical mr-md-2 d-none d-md-inline-flex">
           <button class="btn btn-dark movetopbutton"  data-index="${i}"><span class="fa fa-chevron-up overline"></span></button>
           <button class="btn btn-dark movebotbutton"  data-index="${i}"><span class="fa fa-chevron-down underline"></span></button>
         </div>
         <div class="btn-group-vertical mr-md-2">
           <button class="btn btn-secondary moveupbutton"  data-index="${i}"><span class="fa fa-chevron-up"></span></button>
           <button class="btn btn-secondary movedownbutton"  data-index="${i}"><span class="fa fa-chevron-down"></span></button>
         </div>
         <div class="btn-group-vertical">
           <button class="btn btn-success completebutton"  data-index="${i}"><span class="fa fa-check"></span></button>
           <button class="btn btn-danger deletebutton my-button"  data-index="${i}"><span class="fa fa-check fa fa-close"></span></button>
         </div>
       </div>
      </li>
    `);
    saveJSON();
  }

  // Remove completebutton from done-list.
  $('.done-chore-list .completebutton').remove();

  // Leta upp deleteknappar och få dom och fungera.
  $myList.find('.deletebutton').on('click', function(){
    let $btn = $(this);
    let index = $btn.data('index');
    list.removeWithIndex(index);
    updateAllViews();
  });

  // Leta upp completebutton och få dom och fungera.
  $myList.find('.completebutton').on('click', function(){
    let $btn = $(this);
    let index = $btn.data('index');
    let myObject = list.items[index];
    doneList.items.push(myObject);
    list.removeWithIndex(index);
    updateAllViews();
  });

  // Leta upp completebutton och få dom och fungera.
  $myList.find('.moveupbutton').on('click', function(){
    let $btn = $(this);
    let index = $btn.data('index');
    list.moveUp(index);
    updateAllViews();
  });

  $myList.find('.movedownbutton').on('click', function(){
    let $btn = $(this);
    let index = $btn.data('index');
    list.moveDown(index);
    updateAllViews();
  });

  $myList.find('.movetopbutton').on('click', function(){
    let $btn = $(this);
    let index = $btn.data('index');
    list.moveTop(index);
    updateAllViews();
  });

  $myList.find('.movebotbutton').on('click', function(){
    let $btn = $(this);
    let index = $btn.data('index');
    list.moveBot(index);
    updateAllViews();
  });

}

function updateAllViews() {
  updateListView(todoList, '.todo-chore-list');
  updateListView(doneList, '.done-chore-list');
}

function showAndClear(myText){
  if (myText !== '') {
    const myItem = new TodoItem(myText);
    todoList.add(myItem);
    updateAllViews();
    $('#show-added').append(`<p class="showadded">You've added: ${myText}</p>`);
    $('.showadded').delay(700).fadeOut(1500)
    $('#add-chore-to-list').val('');
  }
}

// Letting the user use enter instead of pressing the button.
$('#add-chore-to-list').on('keyup', function(event) {
  let code = event.which;
  if (code == 13) {
    const myText = $('#add-chore-to-list').val();
    showAndClear(myText);
  }
});

// Knapptryckning för lägg till längst ner i to-do-lista
$('#add-last-button').on('click', function(){
  const myText = $('#add-chore-to-list').val();
  showAndClear(myText);
});

function saveJSON(){
  JSON._save('todolist', {
      items: todoList.items
  });
}

function loadJSON(){
  JSON._load('todolist')
  .then((data) => {
    todoList.removeAll();
    todoList.addMany(data.items);
    console.log(todoList.items);
    updateAllViews();
  });
}

loadJSON();
