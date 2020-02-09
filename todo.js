const toDoForm = document.querySelector(".js-toDoForm"),
toDoInput = toDoForm.querySelector("input"),
toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';
let toDos = [];

function filterFn(toDo)
{
    
}

function saveToDos()
{
    localStorage.setItem(TODOS_LS,JSON.stringify(toDos));
}

function deleteToDo(event)
{
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter(function(toDo)
    {
        return toDo.id !== parseInt(li.id);
    });
    toDos = cleanToDos;
    saveToDos();
}

function paintToDo(text)
{
    const li = document.createElement("li");
    const delBtn = document.createElement("buttn");
    const span = document.createElement("span");
    const newId = toDos.length + 1;

    delBtn.innerText = "❌";
    delBtn.addEventListener("click",deleteToDo);
    span.innerText = text;
    li.appendChild(delBtn);
    li.appendChild(span);
    li.id = newId;
    toDoList.appendChild(li);
    const toDoObj =
    {
        text : text,
        id : newId,
    }
    toDos.push(toDoObj);
    saveToDos();
}

function handleSubmit(event)
{
    event.preventDefault();
    const currentValue = toDoInput.value;
    console.log(currentValue);
    paintToDo(currentValue);
    toDoInput.value = ""; //값을 자동으로 추가하네?
}

function something(toDo)
{
    paintToDo(toDo.text);
}
function loadToDos()
{
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos !== null)
    {
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach(something);
    }
}


function init()
{
    loadToDos();
    toDoForm.addEventListener("submit",handleSubmit);
}


init();