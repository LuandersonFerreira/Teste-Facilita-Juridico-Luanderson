const createLocation = "INSERT INTO delivery (customerId, coordinateX, coordinateY) VALUES ($1, $2, $3)";
const getLocationByCustomerId = "SELECT * FROM delivery WHERE customerId = $1";
const updateLocationByCustomerId = "UPDATE delivery SET coordinateX = $1, coordinateY = $2 WHERE customerId = $3"
const removeLocationByCustomerId = "DELETE FROM delivery WHERE customerId = $1";

module.exports = {
    createLocation,
    getLocationByCustomerId,
    updateLocationByCustomerId,
    removeLocationByCustomerId,
};