import { createRequire } from "module";
const require = createRequire(import.meta.url);
const SQLite = require('sqlite3').verbose();
const db = new SQLite.Database('E:/data/development/nodejs/node_modules/biotune/frontend/bio.db');
db.run(`DELETE FROM gumroad WHERE email IS NULL`);
db.run(`DELETE FROM gumroad WHERE accesssstring IS NULL`);