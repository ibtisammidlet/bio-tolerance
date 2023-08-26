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
