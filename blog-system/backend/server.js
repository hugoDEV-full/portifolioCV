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
let posts = [];

app.get('/', (req, res) => {
    res.render('index', { posts });
});

app.post('/add-post', (req, res) => {
    const { title, content } = req.body;
    posts.push({ title, content });
    res.redirect('/');
});
// serviço em 
app.listen(3004, () => {
    console.log('Servidor rodando em http://localhost:3004');
});
