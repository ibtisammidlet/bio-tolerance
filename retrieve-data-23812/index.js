/* Import dependencies */
const Express = require('express'); // Import express
const { URLSearchParams } = require('url'); // import URLSearchParams from url. You can also use form-data (const FormData = require('form-data');).
const axios = require('axios'); // Import Axios
const path = require('path'); // Import path
const bodyParser = require('body-parser'); // Import body-parser
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args)); // Import node-fetch asynchronously; see https://www.npmjs.com/package/node-fetch#installation for more info on why this is done.

const client_id = "1001496087888142396" //** require('./config.json').client_id;
const client_secret = "yWQRZLMgyuMIqZJoWwdXmo40SKTntzNv" //** require('./config.json').client_secret;

// Use the values as desired in your code

/* Define app variables */
const app = Express(); // Create a web app
const port = 80; // Port to host on /*** i need to use 443 port because router interface overcome node and i cant get the server raning to auth.biotune when i use port 80 */

/* Make a function to give us configuration for the Discord API */
function make_config(authorization_token) { // Define the function

  data = { // Define "data"
    headers: { // Define "headers" of "data"
      "authorization": `Bearer MTAwMTQ5NjA4Nzg4ODE0MjM5Ng.G9D040.F7AMjm_uTcLTipwoDbryNo1SXGZRbxGtH0Zzl8`// Define the authorization
    }
  };
  return data; // Return the created object
};

/* Configure the app */
app.use(Express.urlencoded({ extended: false })); // configure the app to parse requests with urlencoded payloads
app.use(Express.json()); // configure the app to parse requests with JSON payloads
app.use(bodyParser.text()); // configure the app to be able to read text

/* Handle GET Requests */
app.get('/', (req, res) => { // Handle incoming GET requests to http://localhost:(port)/
    res.sendFile(path.join(__dirname + '/index.html')); // Send the index.html file
});

/* Handle POST Requests */
app.post('/user', (req, res) => { // Will run when there are any incoming POST requests to http://localhost:(port)/user. Note that a POST request is different from a GET request, so this won't exactly work when you actually visit http://localhost:(port)/user
  const data_1 = new URLSearchParams();
  data_1.append('client_id', client_id);
  data_1.append('client_secret', client_secret);
  data_1.append('grant_type', 'authorization_code');
  data_1.append('redirect_uri', `http://localhost:${port}`);
  data_1.append('scope', 'identify');
  data_1.append('code', req.body);
  fetch('https://discord.com/api/oauth2/token', { method: "POST", body: data_1 }).then(response => response.json()).then(data => {
	  axios.get("https://discord.com/api/users/@me", make_config(data.access_token)).then(response => {
  res.status(200).send(response.data.username);
 }).catch(err => {
  console.log(err);
  res.sendStatus(500);
});
  });

});

app.listen(port, function () { // Configure the app to "listen" on the specified port.
    console.log(`App listening! Link: http://localhost:${port}/`); // Log the fact our app is ready to the console.
});





























/*
var options = {
    key: fs.readFileSync('./ssl/biotunekey.pem'),
    cert: fs.readFileSync('./ssl/cert.pem'),
};


var server = https.createServer(options, app).listen(port, function(){
  console.log("Express server listening on port " + port);
});

*/