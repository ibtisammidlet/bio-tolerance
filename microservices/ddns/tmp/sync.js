import CloudFlare from 'cloudflare-dns'
import {publicIp, publicIpv4, publicIpv6} from 'public-ip';

import { createRequire } from "module";
const require = createRequire(import.meta.url);
var CronJob = require('cron').CronJob;

const cf = new CloudFlare({ token: 'cPr2FB_A1r5hp0YbTwteXGm1HootZlcPUuSttYjh' })


var job = new CronJob(
	'15 * * * * *',
async function() {

		const record = {
			type: 'A',
			name: 'auth',
			content: await publicIpv4()
		}
		await cf.dns.update('9f2c2d447ae3124311649d8d29521aa3', record)
		console.log("sent")
	
	},
	null,
	true,
	'America/Los_Angeles'
);
job.start()




