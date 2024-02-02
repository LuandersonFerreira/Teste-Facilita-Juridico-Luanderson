const createLocation = "INSERT INTO delivery (customerId, coordinateX, coordinateY) VALUES ($1, $2, $3)";
const getLocationByCustomerId = "SELECT coordinatex, coordinatey FROM delivery WHERE customerId = $1";
const updateLocationByCustomerId = "UPDATE delivery SET coordinateX = $1, coordinateY = $2 WHERE customerId = $3"
const removeLocationByCustomerId = "DELETE FROM delivery WHERE customerId = $1";
const getLocations = "SELECT name, telephone, coordinatex, coordinatey FROM facilita_customers INNER JOIN delivery ON facilita_customers.id = delivery.customerid;"

module.exports = {
    createLocation,
    getLocationByCustomerId,
    updateLocationByCustomerId,
    removeLocationByCustomerId,
    getLocations,
};