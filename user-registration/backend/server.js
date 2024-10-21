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
let users = [];

app.get('/', (req, res) => {
    res.render('index', { users });
});

app.post('/register', (req, res) => {
    const { username, email } = req.body;
    users.push({ username, email });
    res.redirect('/');
});

app.listen(3006, () => {
    console.log('Servidor rodando em http://localhost:3006');
});
