const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
let tasks = [];

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../frontend/views'));
app.use(express.static(path.join(__dirname, '../frontend/public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('index', { tasks });
});

app.post('/tasks', (req, res) => {
    const task = req.body.task;
    tasks.push(task);
    res.redirect('/');
});

app.post('/tasks/delete', (req, res) => {
    const taskIndex = req.body.index;
    tasks.splice(taskIndex, 1);
    res.redirect('/');
});

app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});
