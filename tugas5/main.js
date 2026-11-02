// console.log('halo dari main');

const todoForm = document.querySelector('#todo-form');
const todoInput = document.querySelector('#todo-input');
const todoList = document.querySelector('#todo-list');

todoForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const taskText = todoInput.value.trim();
    if (! taskText) return;

    const li = document.createElement('li');
    li.className = 'todo-item';

    const span = document.createElement('span');
    span.textContent = taskText;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Hapus';
    deleteBtn.addEventListener('click', () => li.remove());

    li.append(span, deleteBtn)

    todoList.appendChild(li);

    todoInput.value = '';
})