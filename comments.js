// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Create a route for /comments
app.get('/comments', (req, res) => {
  res.send('This is a GET request to /comments');
});

// Create a route for /comments that takes POST requests
app.post('/comments', (req, res) => {
  res.send('This is a POST request to /comments');
});

// Create a route for /comments that takes PUT requests
app.put('/comments', (req, res) => {
  res.send('This is a PUT request to /comments');
});

// Create a route for /comments that takes DELETE requests
app.delete('/comments', (req, res) => {
  res.send('This is a DELETE request to /comments');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});