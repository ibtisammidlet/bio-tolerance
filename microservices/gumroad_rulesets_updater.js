import { createRequire } from "module";
const require = createRequire(import.meta.url);
const axios = require('axios'); // Import Axios


var options = {
  method: 'GET', // GET https://developers.cloudflare.com/ruleset-engine/rulesets-api/view/
  url: 'https://api.cloudflare.com/client/v4/zones/{zone_id}/rulesets', // biotune zone id acdcd5735aac0eb8bf0389b1ebc59d2d https://dash.cloudflare.com/4ac03128730aab0a8c61bfe9cb4baa3e/biotune.org

  headers: {"Content-Type":"application/json" , "Authorization": "Bearer Y6QWVmH1XUA5b0NEbOCqsQRB_VcNPhSEalS9-sJ4" } //**used Bearer // from ddns/axios-based.js
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