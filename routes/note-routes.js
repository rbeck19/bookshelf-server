const express = require("express")
const { requireToken } = require("../config/auth")
const { handle404 } = require("../lib/custom-errors")
const Book = require("../models/book")

//getting notes from book model
const Note = require("../models/book")
const router = express.Router()

//CREATE
//POST /notes
router.post("/notes", (req, res, next) => {
    const bookId = req.body.note.bookId
    const note = req.body.note
 
    Book.findById(bookId)
        .then(handle404)
        .then(book => {
            book.notes.push(note)
            return book.save()
        })
        .then(book => {
            res.status(201).json({ book: book })
        })
        .catch(next)
})

//UPDATE
//PATCH /notes/:noteId
router.patch("/notes/:noteId", (req, res, next) => {
    const bookId = req.body.note.bookId
    const noteBody = req.body.note

    Book.findById(bookId)
        .then(handle404)
        .then(book => {
                //find note by ID
            const note = book.notes.id(req.params.noteId)
            //set the new note to the content being passed in
            note.set(noteBody)
            return book.save()
        })
        .then(() => res.sendStatus(204))
        .catch(next)
})

//DELETE   /notes/:noteId
router.delete("/notes/:noteId/:bookId", (req, res, next) => {
    const bookId = req.params.bookId
    
    Book.findById(bookId)
        .then(handle404)
        .then(book => {
            book.notes.id(req.params.noteId).remove()
            return book.save()
        })
        .then(() => res.sendStatus(204))
        .catch(next)
})

module.exports = router