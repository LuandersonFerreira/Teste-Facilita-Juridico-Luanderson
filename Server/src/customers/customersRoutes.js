const { Router } = require('express');
const controller = require('./customersController');

const router = Router();

router.get("/", controller.getCustomers);
router.get("/:id", controller.getCustomersById);
router.post("/", controller.addCustomer)
router.delete("/:id", controller.removeCustomer)
router.put("/:id", controller.updateCustomer)


module.exports = router;