// lambda/increment.js

const express = require('express');
const bodyParser = require('body-parser'); // Import body-parser to parse JSON data

const app = express();

// Middleware to parse JSON data from POST requests
app.use(bodyParser.json());

let counter = 0;

app.post('/increment', (req, res) => {
  // Check if the request body contains valid JSON data with an "amount" property
  if (req.body && req.body.amount) {
    const amount = parseInt(req.body.amount);

    if (!isNaN(amount)) {
      counter += amount;
      res.json({ message: `Counter incremented by ${amount}` });
    } else {
      res.status(400).json({ error: 'Invalid amount' });
    }
  } else {
    res.status(400).json({ error: 'Request body must contain an "amount" property' });
  }
});

// Export the Express app for Netlify Functions
module.exports = app;
