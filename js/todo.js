(() => {
    const todoForm = document.querySelector('#todo-form');
    const todoInput = todoForm.querySelector('input');
    const todoList = document.querySelector('#todo-list');

    const TODO_KEY = 'todos';

    let todos = [];
    function saveTodos() {
        localStorage.setItem(TODO_KEY, JSON.stringify(todos));
    }

    function handleTodoSubmit(e) {
        e.preventDefault();
        const newTodo = todoInput.value;
        todoInput.value = '';
        if (!newTodo) {
            return
        }
        newTodoObj = {
            text: newTodo,
            id: Date.now(),
        }
        todos.push(newTodoObj)
        paintTodo(newTodoObj);
        saveTodos();
    }

    function paintTodo(todo) {
        const li = document.createElement('li');
        li.id = todo.id;
        li.innerHTML = `
            <span class="text">${todo.text}</span>
            <button class="delBtn">❌</button>
        `;
        todoList.appendChild(li);
        const delBtn = li.querySelector('button');
        delBtn.addEventListener('click', delTodo);
    }

    function delTodo(e) {
        const li = e.target.closest('li');
        li.remove();
        todos = todos.filter((todo) => todo.id !== parseInt(li.id));
        saveTodos();
    }

    todoForm.addEventListener('submit', handleTodoSubmit);

    const savedTodos = localStorage.getItem(TODO_KEY);
    console.log(savedTodos);
    if (savedTodos) {
        const parseTodos = JSON.parse(savedTodos);
        parseTodos.forEach(paintTodo);
    }
})();