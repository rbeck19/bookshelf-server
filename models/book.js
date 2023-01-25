const mongoose = require("mongoose")
    //subSchema
const noteSchema = require("./note")

const Schema = mongoose.Schema

const bookSchema = new Schema ({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    notes: [noteSchema]
},{
    timestamps: true
})
    //mongoose model: Book
    //collection: books
const Book = mongoose.model("Book", bookSchema)

module.exports = Book