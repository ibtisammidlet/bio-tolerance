import { createRequire } from "module";
const require = createRequire(import.meta.url);
const axios = require('axios'); // Import Axios
const getIP = require('external-ip')();

getIP((err, ip) => {
    if (err) {
        // every service in the list has failed
        throw err;
    }

var options = {
  method: 'PUT',
  url: 'https://api.cloudflare.com/client/v4/zones/acdcd5735aac0eb8bf0389b1ebc59d2d/dns_records/0fb45777bc1a7807be0c5e95bdeb3b48', 
/* got dns_records/identifier ==> curl -X GET "https://api.cloudflare.com/client/v4/zones/acdcd5735aac0eb8bf0389b1ebc59d2d/dns_records?page=1&per_page=20&order=type&direction=asc" -H "Content-Type:application/json" -H "Authorization: Bearer Y6QWVmH1XUA5b0NEbOCqsQRB_VcNPhSEalS9-sJ4" 
{"result":[
{"id":"66e379ce4aa98eaf3de6237ec0e2b1d8","zone_id":"acdcd5735aac0eb8bf0389b1ebc59d2d","zone_name":"biotune.org","name":"auth.biotune.org","type":"A","content":"105.106.6.145","proxiable":true,"proxied":true,"ttl":1,"locked":false,"meta":{"auto_added":false,"managed_by_apps":false,"managed_by_argo_tunnel":false,"source":"primary"},"created_on":"2022-09-26T15:19:16.545762Z","modified_on":"2022-10-18T16:33:59.671892Z"},
{"id":"0fb45777bc1a7807be0c5e95bdeb3b48","zone_id":"acdcd5735aac0eb8bf0389b1ebc59d2d","zone_name":"biotune.org","name":"server.biotune.org","type":"A","content":"105.106.6.145","proxiable":true,"proxied":false,"ttl":1,"locked":false,"meta":{"auto_added":false,"managed_by_apps":false,"managed_by_argo_tunnel":false,"source":"primary"},"created_on":"2022-11-26T05:17:31.43997Z","modified_on":"2022-11-26T05:17:31.43997Z"}
,{"id":"8e0396c3efe2e29088390468a9a99034","zone_id":"acdcd5735aac0eb8bf0389b1ebc59d2d","zone_name":"biotune.org","name":"www.biotune.org","type":"CNAME","content":"ghs.google.com","proxiable":true,"proxied":true,"ttl":1,"locked":false,"meta":{"auto_added":false,"managed_by_apps":false,"managed_by_argo_tunnel":false,"source":"primary"},"created_on":"2022-09-26T15:19:16.523242Z","modified_on":"2022-10-18T16:34:18.281457Z"}
,{"id":"659c2f1db6dfdb56fef47327e28b1330","zone_id":"acdcd5735aac0eb8bf0389b1ebc59d2d","zone_name":"biotune.org","name":"backup.biotune.org","type":"CNAME","content":"ghs.google.com","proxiable":true,"proxied":true,"ttl":1,"locked":false,"meta":{"auto_added":false,"managed_by_apps":false,"managed_by_argo_tunnel":false,"source":"primary"},"created_on":"2022-09-26T15:19:16.548593Z","modified_on":"2022-10-18T16:34:09.426104Z"}
,{"id":"23d06a9b0750f3fa3bc4ce2b55d45d80","zone_id":"acdcd5735aac0eb8bf0389b1ebc59d2d","zone_name":"biotune.org","name":"access.biotune.org","type":"CNAME","content":"ghs.google.com","proxiable":true,"proxied":true,"ttl":1,"locked":false,"meta":{"auto_added":false,"managed_by_apps":false,"managed_by_argo_tunnel":false,"source":"primary"},"created_on":"2022-10-18T15:47:52.347941Z","modified_on":"2022-10-18T16:33:49.918614Z"},
{"id":"b437871301979c7d73ea7ec2bd9b686e","zone_id":"acdcd5735aac0eb8bf0389b1ebc59d2d","zone_name":"biotune.org","name":"cxiroh3ubees.biotune.org","type":"CNAME","content":"gv-225w6467mjjvkp.dv.googlehosted.com","proxiable":true,"proxied":true,"ttl":1,"locked":false,"meta":{"auto_added":false,"managed_by_apps":false,"managed_by_argo_tunnel":false,"source":"primary"},"created_on":"2022-10-18T15:57:56.539087Z","modified_on":"2022-10-18T16:33:43.088734Z"},{"id":"c64f7cc86bd5a3b25d54ebb586f5daa6","zone_id":"acdcd5735aac0eb8bf0389b1ebc59d2d","zone_name":"biotune.org","name":"biotune.org","type":"MX","content":"eforward3.registrar-servers.com","priority":10,"proxiable":false,"proxied":false,"ttl":1,"locked":false,"meta":{"auto_added":false,"managed_by_apps":false,"managed_by_argo_tunnel":false,"source":"primary"},"created_on":"2022-09-26T15:19:16.543368Z","modified_on":"2022-09-26T15:19:16.543368Z"},{"id":"3a91039d3ea47a9b83658355dcacc7a7","zone_id":"acdcd5735aac0eb8bf0389b1ebc59d2d","zone_name":"biotune.org","name":"biotune.org","type":"MX","content":"eforward5.registrar-servers.com","priority":20,"proxiable":false,"proxied":false,"ttl":1,"locked":false,"meta":{"auto_added":false,"managed_by_apps":false,"managed_by_argo_tunnel":false,"source":"primary"},"created_on":"2022-09-26T15:19:16.534243Z","modified_on":"2022-09-26T15:19:16.534243Z"},{"id":"7bbb5bfa1938a51efb4e280f82711f06","zone_id":"acdcd5735aac0eb8bf0389b1ebc59d2d","zone_name":"biotune.org","name":"biotune.org","type":"MX","content":"eforward4.registrar-servers.com","priority":15,"proxiable":false,"proxied":false,"ttl":1,"locked":false,"meta":{"auto_added":false,"managed_by_apps":false,"managed_by_argo_tunnel":false,"source":"primary"},"created_on":"2022-09-26T15:19:16.536316Z","modified_on":"2022-09-26T15:19:16.536316Z"},{"id":"d17d689813b24c7c1bd668e675ee67d0","zone_id":"acdcd5735aac0eb8bf0389b1ebc59d2d","zone_name":"biotune.org","name":"biotune.org","type":"MX","content":"eforward1.registrar-servers.com","priority":10,"proxiable":false,"proxied":false,"ttl":1,"locked":false,"meta":{"auto_added":false,"managed_by_apps":false,"managed_by_argo_tunnel":false,"source":"primary"},"created_on":"2022-09-26T15:19:16.538728Z","modified_on":"2022-09-26T15:19:16.538728Z"},{"id":"5e49f510d901da5307deb9123ad4fa20","zone_id":"acdcd5735aac0eb8bf0389b1ebc59d2d","zone_name":"biotune.org","name":"biotune.org","type":"MX","content":"eforward2.registrar-servers.com","priority":10,"proxiable":false,"proxied":false,"ttl":1,"locked":false,"meta":{"auto_added":false,"managed_by_apps":false,"managed_by_argo_tunnel":false,"source":"primary"},"created_on":"2022-09-26T15:19:16.541024Z","modified_on":"2022-09-26T15:19:16.541024Z"},{"id":"eea47d6982a62cd83d7b4a4f627d2ac5","zone_id":"acdcd5735aac0eb8bf0389b1ebc59d2d","zone_name":"biotune.org","name":"biotune.org","type":"TXT","content":"v=spf1 include:spf.efwd.registrar-servers.com ~all","proxiable":false,"proxied":false,"ttl":1,"locked":false,"meta":{"auto_added":false,"managed_by_apps":false,"managed_by_argo_tunnel":false,"source":"primary"},"created_on":"2022-09-26T15:19:16.526474Z","modified_on":"2022-09-26T15:19:16.526474Z"}],"success":true,"errors":[],"messages":[],"result_info":{"page":1,"per_page":20,"count":12,"total_count":12,"total_pages":1}}
*/

  headers: {"Content-Type":"application/json" , "Authorization": "Bearer Y6QWVmH1XUA5b0NEbOCqsQRB_VcNPhSEalS9-sJ4" }, //**used Bearer 
  data: {"content": ip, "name": "server.biotune.org", "type": "A", "proxied": true, "ttl": 1}
};

axios.request(options).then(function (response) {
  console.log(response.data);
}).catch(function (error) {
  console.error(error);
});

});



