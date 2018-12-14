const nameForm = document.querySelector(".name-form");
const nameInput = nameForm.querySelector("input");
const greeting = document.querySelector(".greeting");
const USER_NAME = "user_name";
const SHOWING_ON = "showing";


function writeGreeting(name)
{
    // classList.Add -> the specified class values. If these classes already exist in the element's class attribute they are ignored.
    // classList.remove -> Removes the specified class values.
    nameForm.classList.remove(SHOWING_ON);
    greeting.classList.add(SHOWING_ON);
    greeting.innerText = `Hello ${name}`;
}


function saveName(name) 
{
    localStorage.setItem(USER_NAME, name);
}

function handleNameSubmit(event) 
{
    event.preventDefault();
    const currentValue = nameInput.value;
    writeGreeting(currentValue);
    saveName(currentValue);
}

function askForName()
{
    nameForm.classList.add(SHOWING_ON);
    nameForm.addEventListener("submit", handleNameSubmit);
}

function loadName() 
{
    const userName = localStorage.getItem(USER_NAME);
    if(userName === null)
    {
        askForName();
    } 
    else 
    {
        writeGreeting(userName);
    }
}

function main() 
{
    loadName();
}

main();