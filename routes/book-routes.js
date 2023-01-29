const express = require("express")
const { handle404 } = require("../lib/custom-errors")
const { requireToken } = require("../config/auth")
const Book = require("../models/book")

const router = express.Router()

//INDEX
//GET /books
router.get("/books", requireToken, (req, res, next) => {
        //get the user ID
    const user = req.user._id
        //display only the items that have "owner" = to user ID
    Book.find({"owner": user})
        .then((books) => {
            return books.map((book) => book)
        })
        .then((books) => res.status(200).json({ books: books}))
        .catch(next)
})

//SHOW
//GET /books/:id
router.get("/books/:id", requireToken, (req, res, next) => {
    Book.findById(req.params.id)
        .then(handle404)
        .then(book => {
            res.status(200).json({ book: book })
        })
        .catch(next)
})

//CREAT 
//POST /books
router.post("/books", requireToken, (req, res, next) => {
        //give book a owner when created by a user
    const book = req.body.book
    book.owner = req.user._id
    Book.create(req.body.book)
        .then((book) => {
            res.status(201).json({ book: book })
        })
        .catch(next)
})

//UPDATE
//PATCH /books/:id
router.patch("/books/:id", requireToken, (req, res, next) => {
    Book.findById(req.params.id)
        .then(handle404)
        .then(book => {
            return book.updateOne(req.body.book)
        })
        .then(() => res.sendStatus(204))
        .catch(next)
})

//DELETE /books/:id
router.delete("/books/:id", requireToken, (req, res, next) => {
    Book.findById(req.params.id)
        .then(handle404)
        .then(book => {
            book.deleteOne()
        })
        .then(() => res.sendStatus(204))
        .catch(next)
})

module.exports = router