const inputTask = document.querySelector('.input-task');
const btnTask = document.querySelector('.btn-task');
const taskList = document.querySelector('.task-list');
const removeTask = document.querySelector('.remove-task');

function createLi(){
    const li = document.createElement('li');
    return li;
}

function createButtonClear(li) {
    li.innerText += ' ';
    const buttonClear = document.createElement('button');
    buttonClear.innerText = 'Apagar';
    buttonClear.setAttribute('class', 'clear');
    li.appendChild(buttonClear);
}

function createTask(textInput) {
    const li = createLi();
    li.innerText = textInput;
    taskList.appendChild(li);
    clearInput();
    createButtonClear(li);
    saveTask();
}

inputTask.addEventListener('keypress', function(e) {
    if (e.keyCode === 13) {
        if (!inputTask.value) return
        createTask(inputTask.value);
    } 
});

function clearInput() {
    inputTask.value = '';
    inputTask.focus();
}

btnTask.addEventListener('click', function() {
    if (!inputTask.value) return
    createTask(inputTask.value);
});

document.addEventListener('click', function(e) {
    const el = e.target;

    if (el.classList.contains('clear')){
        el.parentElement.remove();
        saveTask();
    }
});

function saveTask() {
    const liTask = taskList.querySelectorAll('li');
    const taskOfList = [];

    for (let task of liTask) {
        let taskText = task.innerText;
        taskText = taskText.replace('Apagar', '').trim();
        taskOfList.push(taskText);
    }

    const taskJSON = JSON.stringify(taskOfList);
    localStorage.setItem('task', taskJSON);
}

function addTask() {
    const task = localStorage.getItem('task');
    const taskList = JSON.parse(task);

    for (let task of taskList) {
        createTask(task);
    }
}
addTask();