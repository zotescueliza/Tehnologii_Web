const express = require('express')
const Book = require('./Book')
const app = express()
const port = 3000

const bookRouter = express.Router()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use('/api', bookRouter)

let books = [
    new Book(1, "Dune", "sf", "Frank Herbert"),
    new Book(2, "Robinson Crusoe", "adventure", "Daniel Defoe"),
    new Book(3, "Foundation", "sf", "Asimov")
]

bookRouter.route('/books')
    // Step 1 - GET request (with optional filter by genre)
    .get((req, res) => {
        let filteredBooks = [];

        if (req.query.genre) {
            filteredBooks = books.filter(x => x.genre === req.query.genre)
        } else {
            filteredBooks = books;
        }

        res.json(filteredBooks);
    })

    // Step 2 - POST request (with validation)
    .post((req, res) => {

        const { id, name, genre, author } = req.body;

        if (!id || !name || !genre || !author) {
            return res.status(400).json({
                error: "Invalid book data. Required fields: id, name, genre, author."
            });
        }
        
        if (isNaN(id)) {
            return res.status(400).json({
                error: "ID must be a number."
            });
        }

        if (books.some(book => book.id == id)) {
            return res.status(400).json({
                error: "A book with this ID already exists."
            });
        }

        let newBook = new Book(id, name, genre, author);
        books.push(newBook);

        console.log(books);

        return res.status(201).json(newBook);
    });

app.get('/', (req, res) => {
    res.send('Welcome to my API');
})

app.listen(port, () => {
    console.log('Running on the port ' + port)
})
