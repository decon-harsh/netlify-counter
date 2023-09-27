// lambda/get-counter.js

const express = require('express');
const app = express();

let counter = 0;

app.get('/get-counter', (req, res) => {
  res.json({ counter });
});

// Export the Express app for Netlify Functions
module.exports = app;
