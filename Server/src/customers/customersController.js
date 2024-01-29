const { json } = require('body-parser');
const pool = require('../../db');
const queries = require('./customersQueries');
const deliveryQueries = require('../delivery/deliveryQueries');

const getCustomers = (req, res) => {
    pool.query(queries.getCustomers, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

const getCustomersById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getCustomersById, [id], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

const addCustomer = (req, res) => {
    const { name, email, telephone } = req.body;
    // check if email exists
    pool.query(queries.checkEmailExists, [email], (error, results) => {
        if (error) throw error;
        if (results.rows.length){
            res.send("Email already exists.")
        }

        // add studet to db
        pool.query(queries.addCustomer, [name, email, telephone], (error, results) => {
            if (error) throw error;
            res.status(201).send("Customer Created successfully!");
        })
    });
};

const removeCustomer = (req, res) => {
    const id = parseInt(req.params.id);
    // check if id exists
    pool.query(queries.getCustomersById, [id], (error, results) => {
        const noCustomerFound = !results.rows.length;
        if (noCustomerFound) {
        res.send("Customers does not exist in the database");
        }

        pool.query(queries.removeCustomer, [id], (error, results) => {
            if (error) throw error;
            res.status(200).send("Customer removed successfully.");
        });
        pool.query(deliveryQueries.removeLocationByCustomerId, [id], (error, results) => {
            if (error) throw error;
        });
    });
};

const updateCustomer = (req, res) => {
    const id = parseInt(req.params.id);
    const { name, email, telephone } = req.body;

    pool.query(queries.getCustomersById, [id], (error, results) => {
        const noCustomerFound = !results.rows.length;
        if (noCustomerFound) {
        res.send("Customers does not exist in the database");
        }

        pool.query(queries.updateCustomer, [name, email, telephone, id], (error, results) => {
            if (error) throw error;
            res.status(200).send("Customer updated successfully");
        })
    })
}

module.exports = {
    getCustomers,
    getCustomersById,
    addCustomer,
    removeCustomer,
    updateCustomer,
};