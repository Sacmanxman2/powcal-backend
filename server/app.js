const express = require('express');
const mongoose = require('mongoose');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');

const app = express();

// Connect to database
mongoose.connect('mongodb://localhost:27017/powcaltest-01');
mongoose.connection.once('open', () => {
  console.log("Connected to database");
});

// Middleware for GraphQL
app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

app.listen(3000, () => {
  console.log("Listening for requests on port 3000");
});
