import { createRequire } from "module";
const require = createRequire(import.meta.url);
const sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database('./bio.db');
const axios = require('axios'); // Import Axios
import fetch from 'node-fetch';


var API_ENDPOINT = 'https://discord.com/api/v10'
var CLIENT_ID = '1001496087888142396'
var CLIENT_SECRET = 'yO2I4J9RqdYSFfA0UjZsYRtJUHREWdXN'
var REDIRECT_URI = 'http://auth.biotune.org'

let sql = 'SELECT refresh_token FROM members';

db.all(sql, [], (err, rows) => {
  if (err) {
    throw err;
  }
  rows.forEach((row) => {

var data = {
    'client_id': CLIENT_ID,
    'client_secret': CLIENT_SECRET,
    'grant_type': 'refresh_token',
    'refresh_token': row.name
  }
var headers = {
    'Content-Type': 'application/x-www-form-urlencoded'
  }

  axios.get('%s/oauth2/token' % API_ENDPOINT, data=data, headers=headers).then(response => {
    // Make a request yet again to the Discord API with the token from previously.
    console.log(response.json)
    });

/*
  r = requests.post('%s/oauth2/token' % API_ENDPOINT, data=data, headers=headers)
  r.raise_for_status()
  return r.json()
*/


});
});






