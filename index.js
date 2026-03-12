// Import required modules
const express = require('express');
const bodyParser = require('body-parser');

// Create an instance of the Express application
const app = express();

// Middleware to parse JSON request bodies
app.use(bodyParser.json());

// Middleware to parse URL-encoded request bodies
app.use(bodyParser.urlencoded({ extended: true }));

// Define a route for the root URL
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Define a route for a specific API endpoint
app.post('/api/users', (req, res) => {
  const { name, email } = req.body;
  // Perform some logic with the received data
  // ...
  res.status(201).json({ message: 'User created successfully' });
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});