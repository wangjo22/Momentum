const todoForm = document.querySelector(".todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector(".todo-list");
const TODO_LIST = "todos-list";

let toDos = [];



function deleteTodo(event)
{
    const btn = event.target;
    const li = btn.parentNode;
    todoList.removeChild(li);

    const cleanTodos = toDos.filter(function(todo)
    {
        return todo.id != parseInt(li.id);
    });
    toDos = cleanTodos;
    saveTodo();
}



function saveTodo()
{
    localStorage.setItem(TODO_LIST, JSON.stringify(toDos));
}



function writeTodo(text)
{
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const newID = toDos.length + 1;
    
    delBtn.innerHTML = "❌";
    delBtn.addEventListener("click", deleteTodo);
    
    const span = document.createElement("span");
    span.innerText = text + "\t";
    li.appendChild(span);
    li.appendChild(delBtn);
    li.id = newID;

    todoList.appendChild(li);
    const todoObj = {
        text: text,
        id: newID
    }
    toDos.push(todoObj);
    saveTodo();

}



function loadTodos()
{
    const loadedTodos = localStorage.getItem(TODO_LIST);
    if(loadedTodos !== null)
    {
        const parsedTodos = JSON.parse(loadedTodos);
        parsedTodos.forEach(function(todo) 
        {
            writeTodo(todo.text);
        });
    } 
    else
    {
        // Don't show any todo list on the browser. 
    }
}

function handleSubmit(event)
{
    event.preventDefault();
    const currentValue = todoInput.value;
    if(currentValue.length > 0) 
    {
        writeTodo(currentValue);
    }
    todoInput.value = "";
}

function main()
{
    loadTodos();
    todoForm.addEventListener("submit", handleSubmit);
}


main();