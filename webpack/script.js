// Import the Express module
import express from 'express';

// Create an Express app
const app = express();

// Define routes and middleware
// ...

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Define a route to handle GET requests to the root URL
app.get('/', (req, res) => {
  res.send('Hello, Express!');
});
// https://you.com/search?q=how+to+start+the+bundling+process&cid=c1_1be849e0-5b52-47a4-938d-f50bea380218&tbm=youchat