const { Pool } = require('pg');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../../.env'), override: true });

const pool = new Pool({
  user: 'postgres',
  host: '127.0.0.1',
  database: 'proyecto_final_web',
  password: '1234',
  port: 5432
});

module.exports = pool;