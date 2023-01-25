const mongoose = require("mongoose")

const Schema = mongoose.Schema

const noteSchema = new Schema ({
    content: {
        type: String,
        default: null,
        nulable: true
    }
},{
    timestamps: true
})

module.exports = noteSchema