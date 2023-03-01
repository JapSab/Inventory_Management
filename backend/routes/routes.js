const express = require('express');
const router = express.Router();
const Item = require('../models/items');

const tableController = require('../controllers/table');
const addController = require('../controllers/add');


//  დავალებაში მოთხოვნილი ენდფოინთები
router.get('/inventories', tableController.getTable);
router.post('/inventories', addController.postAdd);
router.delete('/inventories/:id', tableController.deleteRow);



router.get('/add', addController.getAdd);




router.get('/', (req, res, next) => {
    res.redirect('/inventories');
});

module.exports = router