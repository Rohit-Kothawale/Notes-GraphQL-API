const { NoteDatabase } = require("../Database/model")

const resolvers = {
    Query: {
        // Resolve query to fetch all Notes from Database.
        getAllNotes: async () => {
            return await NoteDatabase.find();
        },

        // Resolve query to fetch Note from Database
        getNote: async (parent, args, context, info) => {
            return await NoteDatabase.findById(args.id);
        }
    },

    Notes: {
        elements: (parent) => parent
    },

    Mutation: {
        // Resolve mutation to create new Note and save in Database
        createNote: async (parent, args, context, info) => {
            const {title, date, note} = args.note;
            const newNote = new NoteDatabase({
                title,
                date,
                note
            });
            await newNote.save();
            return newNote;
        },

        // Resolve muation to update note and save to the Database.
        updateNote: async (parent, args, context, info) => {
            const id = args.id;
            const {title, date, note} = args.note;
            const updateNote = await NoteDatabase.findById(id);
            updateNote.title = title;
            updateNote.date = date;
            updateNote.note = note;
            await updateNote.save();
            return updateNote;
        },

        // Resolve mutation to delete Note from Database.
        deleteNote: async (parent, args, context, info) => {
            const id = args.id;
            const note = await NoteDatabase.findById(id);
            await NoteDatabase.deleteOne(note);
            return note;
        }
    },
};

module.exports = { resolvers };