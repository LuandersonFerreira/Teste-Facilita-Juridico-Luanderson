const Pool = require('pg').Pool

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "facilita-customers",
    password: "733721",
    port: 5432,
});

module.exports = pool;