const getCustomers = "SELECT * FROM facilita_customers";
const getCustomersById = "SELECT * FROM facilita_customers WHERE id = $1";
const checkEmailExists = "SELECT c FROM facilita_customers c WHERE c.email = $1";
const addCustomer = "INSERT INTO facilita_customers (name, email, telephone) VALUES ($1, $2, $3)";
const removeCustomer = "DELETE FROM facilita_customers WHERE id = $1";
const updateCustomer = "UPDATE facilita_customers SET name = $1, email = $2, telephone = $3 WHERE id = $4";

module.exports = {
    getCustomers,
    getCustomersById,
    checkEmailExists,
    addCustomer,
    removeCustomer,
    updateCustomer,
};