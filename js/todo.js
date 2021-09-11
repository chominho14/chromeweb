const todoForm = document.getElementById("todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.getElementById("todo-list");

let toDos = [];
const TODOS_KEY = "todos";

function saveTodo(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function handleDeletelist(event){
    const deleteLi = event.target.parentElement;
    deleteLi.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(deleteLi.id));
    saveTodo();
}


function paintTodo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    li.appendChild(span);
    li.appendChild(button);
    button.innerText = "X";
    todoList.appendChild(li); 
    button.addEventListener("click",handleDeletelist );
}

function handleTodoForm(event) {
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";
    const newTodoObj = {
        text : newTodo,
        id : Date.now(),
    };
    toDos.push(newTodoObj);
    paintTodo(newTodoObj);
    saveTodo();
}

todoForm.addEventListener("submit",handleTodoForm );

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintTodo);
}