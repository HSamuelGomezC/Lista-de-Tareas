// Capturar elementos del DOM
const taskForm = document.getElementById('taskForm');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');
const errorMessage = document.getElementById('error');

// Función para agregar una tarea
function addTask(event) {
    event.preventDefault();
    
    // Obtener el valor del input
    const taskText = taskInput.value.trim();
    
    // Validar que el campo no esté vacío
    if (taskText === "") {
        showError('Por favor ingresa una tarea');
        return;
    }

    // Crear el elemento li
    const li = document.createElement('li');
    li.textContent = taskText;

    // Crear el botón de eliminar
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Eliminar';
    deleteButton.classList.add('delete');
    deleteButton.addEventListener('click', deleteTask);

    // Añadir botón al li
    li.appendChild(deleteButton);

    // Marcar tarea como completada al hacer clic
    li.addEventListener('click', toggleComplete);

    // Añadir li a la lista
    taskList.appendChild(li);

    // Limpiar el input
    taskInput.value = '';
    hideError();
}

// Función para eliminar una tarea
function deleteTask(event) {
    const taskItem = event.target.parentElement;
    taskList.removeChild(taskItem);
}

// Función para marcar/desmarcar una tarea como completada
function toggleComplete(event) {
    const taskItem = event.target;
    if (taskItem.tagName === 'LI') {
        taskItem.classList.toggle('completed');
    }
}

// Función para mostrar mensaje de error
function showError(message) {
    errorMessage.textContent = message;
    errorMessage.style.display = 'block';
}

// Función para ocultar mensaje de error
function hideError() {
    errorMessage.style.display = 'none';
}

// Escuchar el envío del formulario
taskForm.addEventListener('submit', addTask);
