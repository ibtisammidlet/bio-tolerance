import { createRequire } from "module";
const require = createRequire(import.meta.url);
var axios = require("axios"); // Import Axios


var options = {
  method: 'GET', // GET https://developers.cloudflare.com/ruleset-engine/rulesets-api/view/
  url: 'https://api.cloudflare.com/client/v4/zones/acdcd5735aac0eb8bf0389b1ebc59d2d/rulesets', // biotune zone id acdcd5735aac0eb8bf0389b1ebc59d2d https://dash.cloudflare.com/4ac03128730aab0a8c61bfe9cb4baa3e/biotune.org

  headers: {"Content-Type":"application/json" , "Authorization": "Bearer " + process.env.CLOUDFLARE_BRIRER } //**used Bearer // from ddns/axios-based.js
};

axios.request(options).then(function (response) {
  console.log(response.data);
}).catch(function (error) {
  console.error(error);
});



/** instalation:
made gumroad custom rule 
https://dash.cloudflare.com/4ac03128730aab0a8c61bfe9cb4baa3e/biotune.org/security/waf/custom-rules
Create custom rules via API 
https://developers.cloudflare.com/waf/custom-rules/create-api/
Require a specific cookie
https://developers.cloudflare.com/waf/custom-rules/use-cases/require-specific-cookie/

List and view rulesets
https://developers.cloudflare.com/ruleset-engine/rulesets-api/view/
firstly we are trying to fatch entery points

**/

/** ==>{
  result: [
    {
      id: '70339d97bdb34195bbf054b1ebe81f76',
      name: 'Cloudflare Normalization Ruleset',
      description: 'Created by the Cloudflare security team, this ruleset provides normalization on the URL path',
      kind: 'managed',
      version: '5',
      last_updated: '2023-05-02T16:19:06.119072Z',
      phase: 'http_request_sanitize'
    },
    {
      id: '77454fe2d30c4220b5701f6fdfb893ba',
      name: 'Cloudflare Managed Free Ruleset',
      description: 'Created by the Cloudflare security team, this ruleset is designed to provide protection for free zones',
      source: 'firewall_managed',
      kind: 'managed',
      version: '56',
      last_updated: '2023-10-11T14:34:33.86359Z',
      phase: 'http_request_firewall_managed'
    },
    {
      id: '1b93fd5c5bfa43298922bd9ccb3c9e3f',
      name: 'default',
      description: '',
      source: 'firewall_custom',
      kind: 'zone',
      version: '3',
      last_updated: '2023-11-24T13:29:47.018875Z',
      phase: 'http_request_firewall_custom'
    },
    {
      id: '4d21379b4f9f4bb088e0729962c8b3cf',
      name: 'DDoS L7 ruleset',
      description: 'Automatic mitigation of HTTP-based DDoS attacks. Cloudflare routinely adds signatures to address new attack vectors. Additional configuration allows you to customize the sensitivity of each rule and the performed mitigation action.',
      kind: 'managed',
      version: '2001',
      last_updated: '2024-02-13T09:55:11.71526Z',
      phase: 'ddos_l7'
    }
  ],
  success: true,
  errors: [],
  messages: []
}
**/


var options = {
  method: 'GET',
  url: 'https://api.cloudflare.com/client/v4/zones/acdcd5735aac0eb8bf0389b1ebc59d2d/rulesets/phases/http_request_firewall_custom/entrypoint',
  headers: {'Content-Type': 'application/json', Authorization: 'Bearer ' + process.env.CLOUDFLARE_BRIRER }
};

axios.request(options).then(function (response) {
  console.log(JSON.stringify(response.data));
}).catch(function (error) {
  console.error(error);
});
/**==> 
{"result":{"id":"1b93fd5c5bfa43298922bd9ccb3c9e3f","name":"default","description":"","source":"firewall_custom","kind":"zone","version":"3","rules":[
{"id":"3d0620ee29424c3c8141a9b0aa6a8bd1","version":"1","action":"skip","expression":"(http.cookie contains \"biotune={\\\"v\\\":\\\"1\\\",\\\"value\\\":\\\"27548741478549\\\"}\") or (http.host eq \"access.biotune.org\") or (http.host eq \"server.biotune.org\") or (http.request.full_uri contains \"biotune.org/2019/07/what-receptors-do-antidepressants-and.html\")","description":"me","last_updated":"2023-04-14T04:44:13.542431Z","ref":"3d0620ee29424c3c8141a9b0aa6a8bd1","enabled":true,"logging":{"enabled":true},"action_parameters":{"ruleset":"current"}},{"id":"9d7fc98a530442b5af984c2f9aab210b","version":"1","action":"skip","expression":"(cf.client.bot)","description":"bots","last_updated":"2023-04-14T04:44:13.542431Z","ref":"9d7fc98a530442b5af984c2f9aab210b","enabled":true,"logging":{"enabled":true},"action_parameters":{"ruleset":"current"}},{"id":"0ef7c67259c04b7aae8c2c83f30098bc","version":"1","action":"block","expression":"(ip.geoip.country in {\"DZ\" \"AO\" \"AZ\" \"BH\" \"BD\" \"BB\" \"BY\" \"BJ\" \"BT\" \"BO\" \"BQ\" \"BA\" \"BG\" \"BF\" \"BI\" \"KH\" \"CM\" \"CV\" \"KY\" \"TD\" \"KM\" \"CG\" \"CD\" \"CR\" \"CI\" \"CY\" \"CZ\" \"EG\" \"EE\" \"ET\" \"FJ\" \"GM\" \"GE\" \"GH\" \"GU\" \"GN\" \"GY\" \"HT\" \"HN\" \"IR\" \"IQ\" \"JM\" \"JO\" \"KZ\" \"KE\" \"KG\" \"LV\" \"LY\" \"LT\" \"MK\" \"MG\" \"MW\" \"MV\" \"ML\" \"MR\" \"MU\" \"YT\" \"MD\" \"MC\" \"MA\" \"MZ\" \"MM\" \"NA\" \"NP\" \"NE\" \"NG\" \"PK\" \"PS\" \"PG\" \"PE\" \"RW\" \"LC\" \"SN\" \"RS\" \"SC\" \"SL\" \"SS\" \"LK\" \"SD\" \"SR\" \"SY\" \"TJ\" \"TZ\" \"TL\" \"TT\" \"TN\" \"TR\" \"TM\" \"UG\" \"UZ\" \"VN\" \"EH\" \"YE\" \"ZM\" \"ZW\"})","description":"3rd","last_updated":"2023-04-14T04:44:13.542431Z","ref":"0ef7c67259c04b7aae8c2c83f30098bc","enabled":true},
{"id":"2e60c2afe61a4a43a30a9e47001974ac","version":"2","action":"skip","expression":"(http.cookie contains \"gumroad={\\\"v\\\":\\\"1\\\",\\\"value\\\":\\\"gabrieltrevino99@gmail.com\\\"}\")","description":"gumroad","last_updated":"2023-11-24T13:29:47.018875Z","ref":"2e60c2afe61a4a43a30a9e47001974ac","enabled":true,"logging":{"enabled":true},"action_parameters":{"ruleset":"current"}}],"last_updated":"2023-11-24T13:29:47.018875Z","phase":"http_request_firewall_custom"},"success":true,"errors":[],"messages":[]}
**/



var options = {
  method: 'PATCH',
  url: 'https://api.cloudflare.com/client/v4/zones/acdcd5735aac0eb8bf0389b1ebc59d2d/rulesets/1b93fd5c5bfa43298922bd9ccb3c9e3f/rules/2e60c2afe61a4a43a30a9e47001974ac',
  headers: {'Content-Type': 'application/json', Authorization: 'Bearer ' + process.env.CLOUDFLARE_YRV },
  data: {
    action: 'skip',
  action_parameters: {
    ruleset: "current"
  },
    description: 'gumroad',
    expression: '(http.cookie contains "gumroad={\\"v\\":\\"1\\",\\"value\\":\\"bbb@gmail.com\\"}")'
  }
};
                                                 
axios.request(options).then(function (response) {
  console.log(response.data);
}).catch(function (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      console.error('Server responded with status:', error.response.status);
      console.error('Response data:', error.response.data);
    } else if (error.request) {
      // The request was made but no response was received
      console.error('No response received from the server');
    } else {
      // Something happened in setting up the request that triggered an error
      console.error('Error setting up the request:', error.message);
    }
  });


const SQLite = require('sqlite3').verbose();
const db = new SQLite.Database('E:/data/development/nodejs/node_modules/biotune/frontend/bio.db');

let emails = [];

const usingarray2 = async () => {
db.all("SELECT email FROM gumroad", function(err, rows) {
  rows.forEach(function (row) {
    emails.push(row.email);
  });
  
console.log(emails)
usingarray3(emails)
accessing(emails)
});
db.close();

}
const usingarray3 = async (emails) => {
console.log(emails)
var orfirst = `(`
var expressionfirst = `http.cookie contains "gumroad={\\"v\\":\\"1\\"`;
var emailfirst  = `,\\"value\\":\\"`;
var emailend = `\\"}"`;
var orend = `)`;
var expression = orfirst+expressionfirst+emailfirst+emailend+orend;
console.log(expression)
var or = ` or `;
let emailall = '';
emails.forEach(obj => { 
emailall += orfirst+expressionfirst+emailfirst+obj+emailend+orend+or;
});
console.log(emailall)
emailall= emailall.slice(0, -4);
console.log(emailall)


let emailall2 = '';
var expressionfirst = `http.cookie contains "gumroad={\\"v\\":\\"2\\"`;

for (let i = 0; i < emails.length; i += 20) {
  const group = emails.slice(i, i + 20).join(', ');
  console.log(`${group}`);
  emailall2 += orfirst+expressionfirst+emailfirst+`${group}`+emailend+orend+or;
}
console.log(emailall2)
emailall2= emailall2.slice(0, -4);
console.log(emailall2)

console.log("emailall2"+emailall2)
using(emailall2);
}

const using = async (emailall2) => {
	console.log(emailall2);
	
var options = {
  method: 'PATCH',
  url: 'https://api.cloudflare.com/client/v4/zones/acdcd5735aac0eb8bf0389b1ebc59d2d/rulesets/1b93fd5c5bfa43298922bd9ccb3c9e3f/rules/2e60c2afe61a4a43a30a9e47001974ac',
  headers: {'Content-Type': 'application/json', Authorization: 'Bearer ' + process.env.CLOUDFLARE_YRV },
  data: {
    action: 'skip',
  action_parameters: {
    ruleset: "current"
  },
    description: 'gumroad',
    expression: emailall2
  }
};
                                                 
axios.request(options).then(function (response) {
  console.log(response.data);
}).catch(function (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      console.error('Server responded with status:', error.response.status);
      console.error('Response data:', error.response.data);
    } else if (error.request) {
      // The request was made but no response was received
      console.error('No response received from the server');
    } else {
      // Something happened in setting up the request that triggered an error
      console.error('Error setting up the request:', error.message);
    }
  });

}


const accessing = async (emails) => {
let newarray = [];
for (let i = 0; i < emails.length; i += 20) {
  const group = emails.slice(i, i + 20).join(', ');
  newarray.push(`${group}`);
}
console.log(newarray);

const SQLite = require('sqlite3').verbose();
const db = new SQLite.Database('E:/data/development/nodejs/node_modules/biotune/frontend/bio.db');

newarray.forEach(obj => { 
db.run(`INSERT INTO gumroad (accesssstring) VALUES ('${obj}')`);
});
db.close();
}

(async () => {
	await usingarray2()  /** await setting array of links **/
	
	
})()