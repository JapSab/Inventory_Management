const express = require('express');
const router = express.Router();

const tableController = require('../controllers/table');

router.get('/', tableController.getTable);


module.exports = router