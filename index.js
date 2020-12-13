const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const flterOption = document.querySelector(".filter-todo");

// Event listeners

todoButton.addEventListener('click',addTodo);
todoList.addEventListener('click',deleteCheck);
flterOption.addEventListener('click',filterTodo);

function addTodo(event){
  event.preventDefault(); 

  
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  const newTodo= document.createElement('li')
  newTodo.innerHTML=todoInput.value;
  newTodo.classList.add('todo-item');
  todoDiv.appendChild(newTodo);

  const completedButton = document.createElement('button');
  completedButton.innerText="completed";
  completedButton.classList.add("complete-btn");
  todoDiv.appendChild(completedButton);

  const trashButton = document.createElement('button');
  trashButton.innerText="deleted";
  trashButton.classList.add("trash-btn");
  todoDiv.appendChild(trashButton);

  todoList.appendChild(todoDiv);
  //cler to do input value
  todoInput.value = "";

}

function deleteCheck(e){
   const item =e.target;
          
   if(item.classList[0] === "trash-btn"){
       const todo  = item.parentElement;
       todo.classList.add('fall');
      //  todo.remove();
   }
   //check mark
   if(item.classList[0] === "complete-btn"){
     const todo = item.parentElement;
     todo.classList.toggle('completed') 
   }
}

function filterTodo(e){
  const todos = todoList.childNodes;
  console.log(e.target.value);
  todos.forEach(function(todo){
     switch(e.target.value){
       case "All":
          todo.style.display="flex";
           break; 
       case "Completed":
         if(todo.classList.contains("completed")){
           todo.style.display = "flex";
         }else{
            todo.style.display="none";
          }
     }
  })

}