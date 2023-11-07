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
  
const combinedObject = jsonData.reduce((result, obj) => {
return { ...result, ...obj };
}, {});
console.log(combinedObject);
// working when the jsob is object
// https://you.com/search?q=js+code+to+combie+arra+of+objects+into+one+object%0Aconst+arr+%3D+%5B%0A++%7B+love%3A+%27sex%27%2C+age%3A+25+%7D%2C%0A++%7B+seed%3A+%27happy%27%2C+age%3A+30+%7D%2C%0A++%7B+come%3A+%27gain%27%2C+age%3A+35+%7D%0A%5D%3B+to+++%7B+love%3A+%27sex%27%2C+age%3A+25%2C+seed%3A+%27happy%27%2C+age%3A+30%2C+come%3A+%27gain%27%2C+age%3A+35+%7D&cid=c1_41a546b7-b46d-4bd7-97b5-679e2f76a31c&tbm=youchat

const arr = [];
arr.push(combinedObject);
// adding []
// https://you.com/search?q=isn%27t+pushing+the+object+to+array+will+make+it%2C+because+that+what+i+want+%2C+from+this+%7B%0A++token_type%3A+%27Bearer%27%2C%0A++access_token%3A+%27s574TfMmXvhpAn8dLX8IsRsWsAz5WB%27%2C%0A++expires_in%3A+604800%2C%0A++refresh_token%3A+%27sCrnYyA2ykphdtVVRFolDTBKdwtZe2%27%2C%0A++scope%3A+%27email+guilds.join+guilds+connections+identify%27%2C%0A++username%3A+%27elena.final_fail%230%27%2C%0A++id%3A+%27711595336463941692%27%2C%0A++email%3A+%27justinmidlet%40yandex.com%27%2C%0A++avatar%3A+%27https%3A%2F%2Fcdn.discordapp.com%2Favatars%2F711595336463941692%2F0dd86a3f62bc677133a2475b92f06dcd.png%27%0A%7D%0Ato+this+%5B%7B%0A++token_type%3A+%27Bearer%27%2C%0A++access_token%3A+%27s574TfMmXvhpAn8dLX8IsRsWsAz5WB%27%2C%0A++expires_in%3A+604800%2C%0A++refresh_token%3A+%27sCrnYyA2ykphdtVVRFolDTBKdwtZe2%27%2C%0A++scope%3A+%27email+guilds.join+guilds+connections+identify%27%2C%0A++username%3A+%27elena.final_fail%230%27%2C%0A++id%3A+%27711595336463941692%27%2C%0A++email%3A+%27justinmidlet%40yandex.com%27%2C%0A++avatar%3A+%27https%3A%2F%2Fcdn.discordapp.com%2Favatars%2F711595336463941692%2F0dd86a3f62bc677133a2475b92f06dcd.png%27%0A%7D%5D%0A&cid=c1_4f9afee3-fd86-46ed-9085-b5eddb22919c&tbm=youchat

  res.send('Received JSON data'); // Send a response back to the client
  
  /** inject to sqlite **/
const SQLite = require('sqlite3').verbose();
const db = new SQLite.Database('bio.db');

arr.forEach(obj => {
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

++ pushing each object in new row was good for generall peoprpuse code
// erors: https://you.com/search?q=the+code+run+seccsfully+and+gived+Data+inserted+successfully+%2C+but+its+still+puts+++%7B%0A++++token_type%3A+%27Bearer%27%2C%0A++++access_token%3A+%27s574TfMmXvhpAn8dLX8IsRsWsAz5WB%27%2C%0A++++expires_in%3A+604800%2C%0A++++refresh_token%3A+%27sCrnYyA2ykphdtVVRFolDTBKdwtZe2%27%2C%0A++++scope%3A+%27email+identify+guilds+guilds.join+connections%27%0A++%7D%2C+in+row+and+the+second+++%7B%0A++++username%3A+%27elena.final_fail%230%27%2C%0A++++id%3A+%27711595336463941692%27%2C%0A++++email%3A+%27justinmidlet%40yandex.com%27%2C%0A++++avatar%3A+%27https%3A%2F%2Fcdn.discordapp.com%2Favatars%2F711595336463941692%2F0dd86a3f62bc677133a2475b92f06dcd.png%27%0A++%7D+in+next+row&cid=c1_191ac9de-f837-4ba8-927e-adf6e37ef3f4&tbm=youchat
**/
});

app.listen(3000, function () {
  console.log('Server is running on port 3000');
});
