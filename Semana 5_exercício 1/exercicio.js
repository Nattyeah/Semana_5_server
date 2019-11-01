const express = require('express')

const server = express();

// server.get('/', function(req, res) {
//     res.send('hello world')
// })

const arr = ["Marina", "Nataly"]

// server.get('/users/', (req, res, next) => {
//     res.send(arr);
// })

// server.get('/livro/:nomedolivro', (req, res, next) => {
//     res.send(req.params);
// })

const livros = ["Harry Potter", "Diários de Uma Paixão"]

// server.get('/books/', (req, res, next) => {
//     res.send(livros[1]);
// })

server.get('/arr/:userName/livros/:bookName', (req, res, next) => {
    // res.send(req.params);

const { userName, bookName } = req.params;
// const resultadoName = user[arr];
// const resultadoBook = books[livros];
// const concatenando = arr.concat(resultadoName + resultadoBook)

return res.send(arr[userName] + livros[bookName]);
})

server.get('/country', (req, res, next) => {

    // const paises = ["Brasil"]
        res.send(req.query.pais);
    })
    
server.listen(2400);