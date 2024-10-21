const express = require('express');
const path = require('path');

const app = express();
let words = ["javascript", "programming", "developer", "nodejs", "express"];
let currentWord = '';
let guessedLetters = [];
let attempts = 6;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../frontend/views'));
app.use(express.static(path.join(__dirname, '../frontend/public')));

app.get('/', (req, res) => {
    if (currentWord === '') {
        currentWord = words[Math.floor(Math.random() * words.length)];
        guessedLetters = [];
        attempts = 6;
    }
    res.render('index', { currentWord, guessedLetters, attempts });
});

app.post('/guess', (req, res) => {
    const letter = req.body.letter.toLowerCase();
    if (!guessedLetters.includes(letter)) {
        guessedLetters.push(letter);
        if (!currentWord.includes(letter)) {
            attempts--;
        }
    }
    res.redirect('/');
});

app.listen(3002, () => {
    console.log('Servidor rodando em http://localhost:3002');
});
