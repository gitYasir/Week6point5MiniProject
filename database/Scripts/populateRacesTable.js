import racesData from '../../races-data.js';
import query from '../index.js';

async function populatedriversTable() {
  for (let i = 0; i < drivers.length; i++) {
    const circuitName = racesData[i].circuitName;
    const winner = racesData[i].winner;
    const driverNumber = racesData[i].driverNumber;
    //insert sql string here
    const res = await query(
      `INSERT INTO races (circuit_name , winner , driver_number ) VALUES ($1, $2,$3)`,
      [circuitName, winner, driverNumber]
    );
    console.log(res);
  }
}

populatedriversTable();
