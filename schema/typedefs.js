const { gql } = require("apollo-server");

const typeDefs = gql`
    type Note {
        id: ID
        title: String
        date: String
        note: String
    }

    type Query {
        # Read all notes from Database        
        getAllNotes: [Note]

        # Create new note
        getNote(id: ID): Note
    }

    input NewNote {
        title: String,
        date: String,
        note: String
    }

    type Mutation {
        # Create new Note and save in Database
        createNote(note: NewNote): Note

        # Update note and save it to Database
        updateNote(id: ID, note: NewNote): Note

        # Delete note from Database
        deleteNote(id: ID): Note
    }
`;

module.exports = { typeDefs };