import {publicIp, publicIpv4, publicIpv6} from 'public-ip';
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const axios = require('axios'); // Import Axios

const cftoken = ({ token: 'cPr2FB_A1r5hp0YbTwteXGm1HootZlcPUuSttYjh' });
var zone = '9f2c2d447ae3124311649d8d29521aa3';
const record = {
    type: 'A',
    name: 'auth',
    content: await publicIpv4()
}
axios.put('https://api.cloudflare.com/client/v4/zones/'+zone, {
    headers: {
        "X-Auth-Email": `storebitid@gmail.com`,
        "X-Auth-Key": cftoken,
        "Content-Type": "application/json"
    },
    data: record
})
    .then(result => console.log(result))
    .catch(console.error);