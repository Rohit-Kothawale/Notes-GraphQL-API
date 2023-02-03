const { mongoose, Schema } = require("mongoose");

const { NoteSchema } = mongoose

const NoteDataSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        requiredL: true,
    },
    note: {
        type: String,
        required: true,
    }
});

const NoteDatabase = mongoose.model('Note', NoteDataSchema);

module.exports = { NoteDatabase };