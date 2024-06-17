const express = require("express");
const router = express.Router();
const {getEmployees,
       getEmployee, 
       createEmployee, 
       updateEmployee,
       deleteEmployee} = require("../controllers/employeeController")

router.route("/").get(getEmployees);

router.route("/:id").get(getEmployee);

router.route("/").post(createEmployee);

router.route("/:id").put(updateEmployee);

router.route("/:id").delete(deleteEmployee);
module.exports = router;