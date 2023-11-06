const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.post('/subbind', function (req, res) {
  // Access the JSON data sent in the request
  const jsonData = req.body;

  console.log(jsonData); // Output the received JSON data to the console

  // Process the JSON data as needed

  res.send('Received JSON data'); // Send a response back to the client
  
  
  /** inject to sqlite **/
const SQLite = require('sqlite3').verbose();
const db = new SQLite.Database('bio.db');



// Close the sqlite3 database
db.close();
// https://beta.character.ai/chat2?char=YntB_ZeqRq2l_aVf2gWDCZl4oBttQzDvhj9cXafWcF8 

});

app.listen(3000, function () {
  console.log('Server is running on port 3000');
});
