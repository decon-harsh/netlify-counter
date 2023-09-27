const app = require('../server'); // Import the Express app

exports.handler = async (event, context) => {
  app.get('/get-counter', (req, res) => {
    res.json({ counter });
  });

  const response = await app(event, context); // Handle the request using the Express app
  return {
    statusCode: response.statusCode,
    body: response.body,
    headers: {
      'Content-Type': 'application/json',
    },
  };
};
