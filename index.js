const { ApolloServer } = require("apollo-server-express");
const express = require('express');
const { graphQLHttp } = require("express-graphql");
const { mongoose } = require("mongoose");

const { typeDefs } = require("./schema/typedefs");
const { resolvers } = require("./schema/resolvers");

async function startServer() {
    // Setup ApolloServer
    const server = new ApolloServer({ typeDefs, resolvers });

    // Start server
    await server.start();
    const app = express();

    // Set express as middleware to our ApolloServer. 
    server.applyMiddleware({ app });

    // Database connection 
    await mongoose.connect('mongodb://localhost:27017/note_DB', {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    })
    console.log('Mongoose Connected...');

    // Listening to server    
    app.listen(4000, () =>  console.log(`YOUR API IS RUNNING...`));
}

startServer()