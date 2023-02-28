const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const Item = require('../models/items');

exports.getAdd = (req, res, next) => {
    
    res.render('add', {
        path: '/add'

    });
}

exports.postAdd = (req, res, next) => {
    const itemName = req.body.itemName;
    const selectedLocation = req.body.selectedLocation;
    const itemPrice = req.body.itemPrice;

    Item
    .create({
        itemName: itemName,
        selectedLocation: selectedLocation,
        itemPrice: itemPrice
    })
    .then(result => console.log(result))
    .catch(err => console.log(err));

}