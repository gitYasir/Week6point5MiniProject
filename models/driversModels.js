import query from '../database/index.js';

export async function getAlldrivers() {
  const data = await query(`SELECT * FROM drivers;`);
  return data.rows;
}

export async function getDriverByDriverNumber(driverNumber) {
  const driver = await query(
    `SELECT * FROM drivers WHERE driver_number = $1;`,
    [driverNumber]
  );
  return driver.rows;
}

export async function getDriverByName(driverName) {
  const driver = await query(
    `SELECT * FROM drivers WHERE driver_name LIKE '%$1%';`,
    [driverName]
  );
  return driver.rows;
}

export async function inputNewDriver(drivername, driverNumber) {
  const newdriver = await query(
    `INSERT INTO drivers (driver_name, driver_number) VALUES ($1,$2) RETURNING *;`,
    [drivername, driverNumber]
  );
  return newdriver.rows;
}

export async function updateDriverById(id, drivername, driverNumber) {
  const updateddriver = await query(
    `UPDATE drivers SET driver_name=$1, driver_number=$2 WHERE driver_id = $3 RETURNING *;`,
    [drivername, driverNumber, id]
  );
  return updateddriver.rows;
}

export async function deleteDriverById(id) {
  const deletedDriver = await query(
    `DELETE FROM drivers WHERE driver_id = $1 RETURNING *`,
    [id]
  );
  return deletedDriver.rows;
}
