const { JsonDB, Config } = require('node-json-db');

module.exports =  new JsonDB(new Config("./src/db/ibbx", true, false, '/'));
