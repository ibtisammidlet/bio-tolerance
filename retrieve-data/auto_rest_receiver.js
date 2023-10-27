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

var urlcomp = "https://example.com"+req.url;
var urlund = urlcomp.toString()
var urlstring = decodeURIComponent(urlund);
const params = new URLSearchParams(urlstring.search);
const query2 = params.get('subbind');
console.log(query2);
console.log(urlund);
console.log(urlstring)

const obj = JSON.parse(decodeURIComponent(JSON.stringify(body))); // Decoding the query parameters, reparse
console.log(obj); //==> {  '[{"token_type":"Bearer","access_token":"yEhmDYjRrlDrDhWIfIQtMyKECVUReM","expires_in":604800,"refresh_token":"LYMhTkuAEodTqgHM6GgacIHdRZYLYt","scope":"guilds identify email connections guilds.join"},{"username":"elena.final_fail#0", "id":"711595336463941692", "email":"justinmidlet@yandex.com", "avatar":"https://cdn.discordapp.com/avatars/711595336463941692/0dd86a3f62bc677133a2475b92f06dcd.png"}]': ''}
console.log(query)
console.log(decodeURIComponent(JSON.stringify(body)))
console.log(body)


// https://you.com/search?q=how+to+parse+array&cid=c1_eb6d922b-6de2-4ede-8348-f801df1bedad&tbm=youchat

/** inject to sqlite **/
const SQLite = require('sqlite3').verbose();
const db = new SQLite.Database('bio.db');



/** https://you.com/search?q=js+code+to+combie+arra+of+objects+into+one+object%0Aconst+arr+%3D+%5B%0A++%7B+love%3A+%27sex%27%2C+age%3A+25+%7D%2C%0A++%7B+seed%3A+%27happy%27%2C+age%3A+30+%7D%2C%0A++%7B+come%3A+%27gain%27%2C+age%3A+35+%7D%0A%5D%3B+to+++%7B+love%3A+%27sex%27%2C+age%3A+25%2C+seed%3A+%27happy%27%2C+age%3A+30%2C+come%3A+%27gain%27%2C+age%3A+35+%7D&cid=c1_41a546b7-b46d-4bd7-97b5-679e2f76a31c&tbm=youchat
const combinedObject = query.reduce((result, obj) => {
  return { ...result, ...obj };
}, {});
console.log(combinedObject); **/



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


