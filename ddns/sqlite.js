import { createRequire } from "module";
const require = createRequire(import.meta.url);

var sqlite3 = require('sqlite3');



let userDB = new sqlite3.Database("./bio.db", 
    sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE, 
    (err) => { 
        // do your thing 
    });

userDB.run('CREATE TABLE langs(members)');
