import { createRequire } from "module";
const require = createRequire(import.meta.url);
const express = require('express');
const SQLite = require('sqlite3').verbose();
const app = express();
const db = new SQLite.Database('E:/data/development/nodejs/node_modules/biotune/frontend/bio.db');
const cors = require('cors');

app.use(cors());

const injecteddata = async () => {
app.get('/injecteddata', async function (req, res) {
	 const queryParam = req.query.q; 
	 console.log(queryParam)

	    try {
    const matchingObject = await usingarray2(queryParam);
	res.send('Matching object: ' + matchingObject);
	  } catch (error) {
		      res.status(500).send('Error: ' + error.message); 
			    }
});

app.listen(80, function () {
  console.log('Server is running on port 80');
});
}

let accessstrings = [];

const usingarray2 = async (queryParam) => {
console.log(queryParam)
  return new Promise((resolve, reject) => {
let accessstrings = [];
db.all("SELECT accesssstring FROM gumroad WHERE accesssstring IS NOT NULL", function(err, rows) {
	      if (err) {
        reject(err); // Reject the Promise if there's an error
      } else {
  rows.forEach(function (row) {
    accessstrings.push(row.accesssstring);
  });
  console.log(accessstrings)
const matchingObject =   usingarray3(accessstrings,queryParam)
console.log(matchingObject)
       resolve(matchingObject);
	     }
		     });
			 
});

}
const usingarray3 = async (accessstrings,queryParam) => {
	 console.log(accessstrings)
	 console.log(queryParam)
const matchingObject = accessstrings.find(obj => obj.includes(queryParam));
console.log(matchingObject);
return matchingObject;

	 
}

(async () => {
	/**await usingarray2()   await setting array of links **/
	injecteddata() 
	
})()



