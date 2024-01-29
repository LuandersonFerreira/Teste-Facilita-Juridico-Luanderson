const { json } = require('body-parser');
const pool = require('../../db');
const queries = require('./deliveryQueries')

const createLocation = (req, res) => {
    const { customerId, coordinateX, coordinateY } = req.body;
    pool.query(queries.createLocation, [customerId, coordinateX, coordinateY], (error, results) => {
        if (error) throw error;
        res.status(201).send("Location created successfully!");
    });
};

const getLocationByCustomerId = (req, res) => {
    const id = parseInt(req.params.id)
    pool.query(queries.getLocationByCustomerId, [id], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows[0])
    });
}

const updateLocationByCustomerId = (req, res) => {
    const { coordinateX, coordinateY, customerId } = req.body;
    pool.query(queries.updateLocationByCustomerId, [coordinateX, coordinateY, customerId], (error, results) => {
        if (error) throw error;
        res.status(200).send("Location updated successfully!");
    });
}

const removeLocationByCustomerId = (req, res) => {
    const customerId = req.params.id
    pool.query(queries.removeLocationByCustomerId, [customerId], (error, results) => {
        if (error) throw error;
        res.status(200).send("Location deleted successfully!");
    });
}

module.exports = {
    createLocation,
    getLocationByCustomerId,
    updateLocationByCustomerId,
    removeLocationByCustomerId,
};