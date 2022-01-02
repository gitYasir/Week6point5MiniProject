import query from "../index.js";

const sqlString = `CREATE TABLE IF NOT EXISTS drivers (driver_id SERIAL PRIMARY KEY, driver_name TEXT, driver_number INT)`;

async function createDriversTable() {
  const res = await query(sqlString);
  console.log("created drivers table", res);
}

createDriversTable();
