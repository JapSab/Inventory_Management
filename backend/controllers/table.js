const Item = require('../models/items');


exports.getTable = (req, res, next) => {
    Item.findAll()
        .then( items => {
            res.render('table', {
            path: '/',
            items: items

        })
    }
)}

