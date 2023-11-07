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

jsonData.forEach(obj => {
  const columns = Object.keys(obj).join(', ');
  const values = Object.values(obj).map(value => `'${value}'`).join(', ');
  const insertQuery = `INSERT INTO users (${columns}) VALUES (${values})`;
  db.run(insertQuery);
});

// Close the sqlite3 database
db.close();
/**
data base should be already made with needed keys and datatype text and NULL allowed
cons: it pushes each object in new row

eror consoled to get this:
undefined:0


[Error: SQLITE_ERROR: table users has no column named token_type
Emitted 'error' event on Statement instance at:
] {
  errno: 1,
  code: 'SQLITE_ERROR'
}

Node.js v18.12.1
---
undefined:0


[Error: SQLITE_ERROR: table users has no column named token_type
Emitted 'error' event on Statement instance at:
] {
  errno: 1,
  code: 'SQLITE_ERROR'
}

Node.js v18.12.1
---
undefined:0


[Error: SQLITE_ERROR: table users has no column named username
Emitted 'error' event on Statement instance at:
] {
  errno: 1,
  code: 'SQLITE_ERROR'
}

Node.js v18.12.1
---
undefined:0


[Error: SQLITE_CONSTRAINT: NOT NULL constraint failed: users.token_type
Emitted 'error' event on Statement instance at:
] {
  errno: 19,
  code: 'SQLITE_CONSTRAINT'
}
---
// https://beta.character.ai/chat2?char=YntB_ZeqRq2l_aVf2gWDCZl4oBttQzDvhj9cXafWcF8 
// https://you.com/search?q=isnt+this+username+key+%2C+username%3A+%27elena.final_fail%230%27%2C%0A&cid=c1_d931c4bc-b7aa-4806-bcbe-aaeca7907f79&tbm=youchat

**/
});

app.listen(3000, function () {
  console.log('Server is running on port 3000');
});
