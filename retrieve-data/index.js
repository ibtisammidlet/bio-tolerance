const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.listen(80, () => {
  console.log('Server is running on port 80');
});

/** The port number is hardcoded as 80
require('./express_rest_receiver.js');
require('./oauth.js');
**/ 