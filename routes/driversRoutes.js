import express from 'express';
const router = express.Router();
import driversData from '../drivers-data.js';

import {
  deleteDriverById,
  getAlldrivers,
  getDriverById,
  getDriverByName,
  inputNewDriver,
  updateDriverById,
} from '../models/driversModels.js';

router.get('/', async (req, res) => {
  const drivers = await getAlldrivers();
  res.render('all-drivers', { driversData });
});

router.get('/:id', async (req, res) => {
  const driverById = await getDriverById(req.params.id);
  res.json({
    success: true,
    message: `found driver with id ${req.params.id}`,
    payload: driverById,
  });
});

router.get('/', async (req, res) => {
  const driverByName = await getDriverByName(req.query.driverName);
  res.json({
    success: true,
    message: `found driver with name: ${req.query.driverName}`,
    payload: driverByName,
  });
});

router.post('/', async (req, res) => {
  let driverName = req.body.driverName;
  let driverNumber = Number(req.body.driverNumber);
  const newDriver = await inputNewDriver(driverName, driverNumber);
  res.json({ success: true, message: `added driver`, payload: newDriver });
});

router.put('/:id', async (req, res) => {
  let driverName = req.body.driverName;
  let driverNumber = req.body.driverNumber;
  let id = req.params.id;
  const updatedDriver = await updateDriverById(id, driverName, driverNumber);
  res.json({
    success: true,
    message: `updated driver with id ${req.params.id}`,
    payload: updatedDriver,
  });
});

router.delete('/:id', async (req, res) => {
  let id = req.params.id;
  const deletedDriver = await deleteDriverById(id);
  res.json({
    success: true,
    message: `driver deleted`,
    payload: deletedDriver,
  });
});

export default router;
