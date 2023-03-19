class Todo {
    constructor(title, description, completed=false) {
        this.title = title;
        this.description = description;
        this.completed = completed;
    };

    setNewTitle(newTitle) {
        this.title = newTitle
    };

    setNewDescription(newDescription) {
        this.description = newDescription
    };

    changeCompleted() {
        this.completed = true;
    };

    // delete() {

    // }
}

class TodoList {
    constructor() {
        this.todos = [];
    };
    addNewTodo(todo) {
        this.todos.push(todo);

    };

    getAllTodos() {
        return this.todos
    };

    getCompletedTodos() {
        return this.todos.filter(todo => todo.completed === false);
    };

    getUncompletedTodos() {
        return this.todos.filter(todo => todo.completed === true);
    };

    removeList(todo) {
        const index = this.todos.indexOf(todo);
        if (index !== -1) {
            this.todos.splice(index, 1);
        }
    }
}
const todoList = new TodoList()
const form = document.querySelector('#form')
const todoUl = document.getElementById('todo-list')
function saveDate() {
    if (localStorage.getItem('todo')) {
        const todos = JSON.parse(localStorage.getItem('todo'));
        todos.forEach((todo) => {
            todoUl.append(createElemTodo(todo));
        });
    }
}

form.onsubmit = (e) => {
    e.preventDefault()
    const title = document.querySelector('#title').value
    const description = document.querySelector('#description').value
    const todo = new Todo(title, description)
    todoList.addNewTodo(todo)
    todoUl.append(createElemTodo(todo))
    addToStorage(todoList)
}
function createElemTodo(todo) {
    const li = document.createElement('li')
    const title = document.createElement('h3')
    const description = document.createElement('p')
    const deleteBtn = document.createElement("button")
    deleteBtn.innerText = "delete"
    deleteBtn.onclick = () => {
        todoList.removeList(todo)
        li.remove()
        addToStorage(todoList)
    } 
    title.innerText = todo.title
    description.innerText = todo.description
    li.append(title, description, deleteBtn)
    
    return li
}
function addToStorage(params) {
    localStorage.setItem('todo', JSON.stringify(params.todos))
}
saveDate()

