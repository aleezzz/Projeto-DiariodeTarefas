function openPopup() {
  document.getElementById('overlay').style.display = 'flex';
}

function closePopup() {
  document.getElementById('overlay').style.display = 'none';
}
function login() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (username === 'ale' && password === 'senha') {
    // Oculta a tela de login
    document.getElementById('login-screen').style.display = 'none';

    // Exibe a tela principal após o login
    document.getElementById('main-screen').classList.remove('hidden');
  } else {
    alert('Login falhou, cheque seu usário e senha');
  }
}

// Adicione as seguintes linhas ao final do seu arquivo script.js

function addTask() {
  const taskInput = document.getElementById('task-input');
  const taskText = taskInput.value.trim();

  if (taskText !== '') {
    const taskList = document.getElementById('task-list');

    // Cria um novo item de lista
    const taskItem = document.createElement('li');

    // Adiciona a tarefa à lista
    taskItem.innerHTML = `<input type="checkbox" onchange="toggleTask(this)"> ${taskText}`;

    // Adiciona o item à lista de tarefas
    taskList.appendChild(taskItem);

    // Limpa o campo de entrada
    taskInput.value = '';
  }
}

function toggleTask(checkbox) {
  // Marca/desmarca a tarefa como concluída
  const taskItem = checkbox.parentNode;
  taskItem.classList.toggle('completed');
}
// Adicione as seguintes linhas ao final do seu arquivo script.js
