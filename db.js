const Pool = require("pg").Pool
const pool = new Pool({
    user: "postgres",
    password: "root",
    database: "version1",
    host: "localhost",
    port: 5432
});

module.exports = pool;