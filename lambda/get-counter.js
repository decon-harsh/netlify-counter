// lambda/get-counter.js
exports.handler = async (event, context) => {
    try {
      // Your code to retrieve the counter value here
      const counterValue = 42; // Replace with your logic to get the counter value
  
      return {
        statusCode: 200,
        body: JSON.stringify({ counter: counterValue }),
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'Internal Server Error' }),
      };
    }
  };
  