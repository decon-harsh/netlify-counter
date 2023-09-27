// lambda/increment.js

exports.handler = async (event, context) => {
  try {
    // Your code to increment the counter here
    // Example: Increment a counter value
    let counter = 0; // Replace with your logic to get and update the counter value
    counter++;

    return {
      statusCode: 200,
      body: JSON.stringify({ counter: counter }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal Server Error' }),
    };
  }
};
