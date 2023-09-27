// server.js

const express = require('express');
const app = express();
const bodyParser = require('body-parser'); // Import body-parser to parse JSON data

let counter = 0;

// Middleware to parse JSON data from POST requests
app.use(bodyParser.json());

app.post('/increment', (req, res) => {
  counter++;
  res.json({ message: 'Counter incremented successfully' });
});

app.get('/get-counter', (req, res) => {
  res.json({ counter });
});

// Export the Express app for Netlify Functions
module.exports = app;
