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
let books = [];

app.get('/', (req, res) => {
    res.render('index', { books });
});

app.post('/add-book', (req, res) => {
    const { title, author } = req.body;
    books.push({ title, author });
    res.redirect('/');
});

app.listen(3007, () => {
    console.log('Servidor rodando em http://localhost:3007');
});
