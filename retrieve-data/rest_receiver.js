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

/** inject to sqlite **/
const SQLite = require('sqlite3').verbose();
const db = new SQLite.Database('bio.db');




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


