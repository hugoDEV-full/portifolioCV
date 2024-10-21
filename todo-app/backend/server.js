const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../frontend/views'));
app.use(express.static(path.join(__dirname, '../frontend/public')));

// Mock Database
let tasks = [];

app.get('/', (req, res) => {
    res.render('index', { tasks });
});

app.post('/add-task', (req, res) => {
    const { task } = req.body;
    tasks.push({ task });
    res.redirect('/');
});

app.post('/delete-task', (req, res) => {
    tasks.splice(req.body.index, 1);
    res.redirect('/');
});

app.listen(3005, () => {
    console.log('Servidor rodando em http://localhost:3005');
});
