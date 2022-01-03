import query from '../index.js';

const sqlString = `CREATE TABLE IF NOT EXISTS races (race_id SERIAL PRIMARY KEY, circuit_name TEXT, winner TEXT, driver_number INT)`;

async function createRacesTable() {
  const res = await query(sqlString);
  console.log('created races table', res);
}

createRacesTable();
