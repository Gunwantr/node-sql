const express = require('express');
var router = express.Router();
var employeeRoute = require('./EmployeeRoute')

router.use('/employee', employeeRoute);

module.exports = router;
