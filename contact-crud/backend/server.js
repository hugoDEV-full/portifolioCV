const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
let contacts = [];

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../frontend/views'));
app.use(express.static(path.join(__dirname, '../frontend/public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('index', { contacts });
});

app.post('/contacts', (req, res) => {
    const contact = { name: req.body.name, email: req.body.email };
    contacts.push(contact);
    res.redirect('/');
});

app.post('/contacts/delete', (req, res) => {
    const contactIndex = req.body.index;
    contacts.splice(contactIndex, 1);
    res.redirect('/');
});

app.listen(3001, () => {
    console.log('Servidor rodando em http://localhost:3001');
});
