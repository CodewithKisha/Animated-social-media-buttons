// Dark theme
const DarkTheme = document.querySelectorAll("#dark");
const iconPart = document.querySelector(".icon-area");
const headPart = document.querySelector(".header-area");
const bigCon = document.querySelector(".container");
const whiteHead = document.querySelector(".heading");

// Event Listerners used for the dark theme
  DarkTheme[0].addEventListener("click", function(){
  bigCon.style.backgroundColor = "black";
  iconPart.style.color = "white";
  iconPart.style.borderRight = "1px dotted white";
  iconPart.style.backgroundColor = "black";
  headPart.style.backgroundColor = "black";
  headPart.style.borderBottom = "1px dotted white";
  whiteHead.style.color = "white"; 
});

// Event Listerners used for the white theme 

DarkTheme[1].addEventListener("click", function(){
  bigCon.style.backgroundColor = "#dedae2";
  iconPart.style.color = "#fa62ae";
  iconPart.style.backgroundColor = "#f8f8f8";
  headPart.style.backgroundColor = "#f2f1f3";
  whiteHead.style.color = "#fa62ae"; 
});

// selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');

// Event Listerners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterTodo);

// Functions
function addTodo(event) {
// prevent form from submitting
 event.preventDefault();
 if (todoInput.value == "") {
   todoInput.placeholder = `Enter a valid input`;
   return false;
 }
 //Todo Div
 const todoDiv = document.createElement("div");
 todoDiv.classList.add("todo");
//Create Li
const newTodo = document.createElement("li");
newTodo.innerText = todoInput.value;
newTodo.classList.add("todo-item");
todoDiv.appendChild(newTodo);
//Check mark button
const completedButton = document.createElement('button');
completedButton.innerHTML = '<i class="fas fa-check"></i>';
completedButton.classList.add("complete-btn");
todoDiv.appendChild(completedButton);
//Check trash button
const trashButton = document.createElement("button");
trashButton.innerHTML = '<i class="fas fa-trash"></i>';
trashButton.classList.add("trash-btn");
todoDiv.appendChild(trashButton);
//Append 
todoList.appendChild(todoDiv);
//clear Todo input value
todoInput.value = "";
}

function deleteCheck(e) {
    const item = e.target;
    //DELETE TODO
    if (item.classList[0] === "trash-btn") {
        const todo = item.parentElement;
        //Animation
        todo.classList.add("fall");
        todo.addEventListener('transitionend', function(){
            todo.remove();
        });
    }

    //CHECK MARK
    if (item.classList[0] === "complete-btn") {
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
}

function filterTodo(e) {
    const todos = todoList.childNodes;
     todos.forEach(function(todo){
       switch(e.target.value) {
           case "all":
            todo.style.display = 'flex';
               break;
            case "completed":
            if (todo.classList.contains('completed')) {
                todo.style.display = 'flex';
            }
              else{
                todo.style.display = 'none';
              } 
              break; 
            case "uncompleted":
                if(!todo.classList.contains('completed')) {
                    todo.style.display = 'flex'; 
                }
                else{
                    todo.style.display = 'none';
                  }
                  break;
       }  
     });
}





