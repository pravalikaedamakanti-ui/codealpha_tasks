const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'fittrack',
    password: 'Ranga@1012',  // change this
    port: 5432,
});

module.exports = pool;
