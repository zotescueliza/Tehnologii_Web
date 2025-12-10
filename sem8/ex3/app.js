const express = require('express');
const Book = require('./Book');

const app = express();
const port = 3000;

const bookRouter = express.Router();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use('/api', bookRouter);

let books = [
    new Book(1, "Dune", "sf", "Frank Herbert"),
    new Book(2, "Robinson Crusoe", "adventure", "Daniel Defoe"),
    new Book(3, "Foundation", "sf", "Asimov")
];


bookRouter.route('/books')
    .get((req, res) => {
        let filteredBooks = books;

        if (req.query.genre) {
            filteredBooks = books.filter(
                b => b.genre === req.query.genre
            );
        }

        return res.json(filteredBooks);
    })

    .post((req, res) => {
        const { id, name, genre, author } = req.body;

        if (!id || !name || !genre || !author) {
            return res.status(400).json({ message: 'Trebuie id, name, genre, author' });
        }

        const newBook = new Book(Number(id), name, genre, author);
        books.push(newBook);

        console.log('Books after POST:', books);
        return res.status(201).json(newBook);
    });


bookRouter.route('/books/:bookId')
    .get((req, res) => {
        const id = Number(req.params.bookId);
        const book = books.find(b => b.id === id);

        if (!book) {
            return res.status(404).json({ message: 'Book not found' });
        }

        return res.json(book);
    })

    .put((req, res) => {
        const id = Number(req.params.bookId);
        const bookModif = books.find(b => b.id === id);

        if (!bookModif) {
            return res.status(404).json({ message: 'Book not found' });
        }

        if (req.body.name !== undefined) {
            bookModif.name = req.body.name;
        }
        if (req.body.genre !== undefined) {
            bookModif.genre = req.body.genre;
        }
        if (req.body.author !== undefined) {
            bookModif.author = req.body.author;
        }

        return res.json(bookModif);
    })

    .delete((req, res) => {
        const id = Number(req.params.bookId);
        const index = books.findIndex(b => b.id === id);

        if (index === -1) {
            return res.status(404).json({ message: 'Book not found' });
        }

        const deleted = books.splice(index, 1)[0];
        return res.json(deleted);
    });


app.get('/', (req, res) => {
    res.send('Welcome to my API');
});

app.listen(port, () => {
    console.log('Running on the port ' + port);
});
