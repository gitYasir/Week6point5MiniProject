import drivers from "../../drivers-data.js";
import query from "../index.js";

async function populatedriversTable() {
  for (let i = 0; i < drivers.length; i++) {
    const driverName = drivers[i].driverName;
    const driverNumber = drivers[i].driverNumber;
    //insert sql string here
    const res = await query(
      `INSERT INTO drivers (driver_name, driver_number) VALUES ($1, $2)`,
      [driverName, driverNumber]
    );
    console.log(res);
  }
}

populatedriversTable();
