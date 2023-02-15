const express = require('express');
const bodyParser = require('body-parser');
const somersetize = require('./somersetize');

const app = express();

// Use json middleware to parse request body
app.use(bodyParser.json());

// Define route for /somersetize endpoint
app.post('/somersetize', (req, res) => {
  const input = req.body.input;
  const output = somersetize(input);

  console.log(output)
  res.send({ output: output });
});

// Serve index.html at root path
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// Start the server
app.listen(5000, () => {
  console.log('Server started on port 3000');
});
