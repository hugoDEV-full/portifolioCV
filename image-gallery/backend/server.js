const express = require('express');
const path = require('path');

const app = express();
const images = [
    { src: 'image1.jpg', alt: 'Imagem 1' },
    { src: 'image2.jpg', alt: 'Imagem 2' },
    { src: 'image3.jpg', alt: 'Imagem 3' }
];

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../frontend/views'));
app.use(express.static(path.join(__dirname, '../frontend/public')));

app.get('/', (req, res) => {
    res.render('index', { images });
});

app.listen(3003, () => {
    console.log('Servidor rodando em http://localhost:3003');
});
