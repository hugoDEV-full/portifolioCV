const socket = new WebSocket('ws://localhost:3000');

const form = document.getElementById('form');
const input = document.getElementById('input');
const messages = document.getElementById('messages');

socket.addEventListener('message', function (event) {
    const item = document.createElement('li');
    item.textContent = event.data;
    item.classList.add('list-group-item');
    messages.appendChild(item);
});

form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (input.value) {
        socket.send(input.value);
        input.value = '';
    }
});
