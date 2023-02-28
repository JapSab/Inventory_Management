const express = require('express');
const router = express.Router();

const addController = require('../controllers/add');

router.get('/add', addController.getAdd);
router.post('/add', addController.postAdd);



module.exports = router