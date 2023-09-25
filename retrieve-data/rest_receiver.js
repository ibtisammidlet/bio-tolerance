const http = require('http');
const url = require('url');

const server = http.createServer(function (req, res) {
  // Check if the request method is GET
  if (req.method !== 'GET') {
    res.statusCode = 405;
    return res.end("Method Not Allowed");
  }

  // Set the 'Access-Control-Allow-Origin' header
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Get the URL parameters
  const query = url.parse(req.url, true).query;
  let body = query; // Assign query parameters to body variable

  console.log(decodeURIComponent(JSON.stringify(body))); // Decoding the query parameters

// Set up the JSON data to insert into the users table
const data = body; // {    myKey: 'key1',    myKey: 'key2',};

/** inject to sqlite **/
const SQLite = require('sqlite3').verbose();
const db = new SQLite.Database('bio.db');


const jsonObject = {
  "token_type": "Bearer",
  "access_token": "HytWqfBDwI1l3Coi1hZlbYzn6bGDCF",
  "expires_in": 604800,
  "refresh_token": "E1jyiqbEgHninYg4hjqd7o2PATYDeb",
  "scope": "identify connections guilds guilds.join email",
  "username": "elena.final_fail#0",
  "id": "711595336463941692",
  "email": "justinmidlet@yandex.com",
  "avatar": "https://cdn.discordapp.com/avatars/711595336463941692/0dd86a3f62bc677133a2475b92f06dcd.png"
};

const schema = `
    CREATE TABLE IF NOT EXISTS users (
        ${Object.keys(jsonObject).map(key => `${key} TEXT NOT NULL DEFAULT NULL`).join(',\n')}
    )
`;
 db.run(schema);
// everything work till here

const insertData = `
    INSERT INTO users (${Object.keys(jsonObject).join(', ')})
    VALUES (${Object.values(jsonObject).map(value => `'${value}'`).join(', ')})
`;
db.run(insertData);


// Close the sqlite3 database
db.close();
// https://beta.character.ai/chat2?char=YntB_ZeqRq2l_aVf2gWDCZl4oBttQzDvhj9cXafWcF8 


  res.statusCode = 200;
  res.end("Response sent");
});

// Listen on the specified port
server.listen(3000);

server.on('error', function (error) {
  console.log('Error:', error);
});



/**
const http = require('http');

const server = http.createServer(function (req, res) {
  // Set the 'Access-Control-Allow-Origin' header to allow requests from any origin
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    // Handle preflight OPTIONS request
    res.statusCode = 200;
    return res.end();
  }

  if (req.method !== 'GET') {
    // Handle non-GET request
    let body = '';

    req.on('data', function (data) {
      body += data;
    });

    req.on('end', function () {
      try {
        const decodedBody = decodeURIComponent(body);
        const json = JSON.parse(decodedBody);
        console.log(json);
        res.statusCode = 200;
        res.end("Response sent");
      } catch (error) {
        res.statusCode = 400;
        res.end("Invalid JSON");
      }
    });
  } else {
    // Handle GET request
    res.statusCode = 200;
    return res.end("Response sent");
  }
});

// Listen on the specified port
server.listen(3000);

server.on('error', function (error) {
  console.log('Error:', error);
});
**/
