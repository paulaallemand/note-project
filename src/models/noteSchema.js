const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    title: {
        type: String,
        require: true
    },
    content: {
        type: String,
        require: true
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
});

module.exports = mongoose.model("note", noteSchema)