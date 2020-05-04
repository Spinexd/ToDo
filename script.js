//selectors

const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');


//event listeners
todoButton.addEventListener('click', addTodo);

todoList.addEventListener('click', deleteCheck);


//functions

function addTodo(event){
    //Prevent form submit
    event.preventDefault();
    //todo div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    //Make list
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    //check button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
      
    //delete button     
    const trashButton = document.createElement('button'); 
    trashButton.innerHTML = '<i class="fas fa-trash"></i>'; 
    trashButton.classList.add("trash-btn");    
    todoDiv.appendChild(trashButton);

    //append list

    todoList.appendChild(todoDiv);

    //clear todo input 
    todoInput.value = "";
}

function deleteCheck(e) {
    const item = e.target;
    //delete
    if (item.classList[0] === 'trash-btn'){
        const todo = item.parentElement;
            todo.remove();
        }
        

    //check
    if (item.classList[0] === "complete-btn"){
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
}