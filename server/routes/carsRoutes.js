const express = require('express');

const { getCars, deleteCar, changeStatusCar, addCar, getCarsByID } = require('../controllers/cars');

const router = express.Router();

router.get('/cars', getCars);
router.patch('/cars/:id', changeStatusCar);
router.delete('/cars/:id', deleteCar);
router.post('/cars', addCar);
router.get('/car/:id', getCarsByID);

module.exports = router;
