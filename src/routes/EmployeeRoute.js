var express = require('express');
var router = express.Router();
var employeeService = require('../services/EmployeeService')
// define the home page route
router.get('/', [
    employeeService.getEmployee
]);

module.exports = router;
