const { Router } = require('express');
const controller = require('./deliveryController');

const router = Router();

router.post("/", controller.createLocation)
router.get("/:id", controller.getLocationByCustomerId);
router.put("/", controller.updateLocationByCustomerId);
router.delete("/:id", controller.removeLocationByCustomerId);


module.exports = router;