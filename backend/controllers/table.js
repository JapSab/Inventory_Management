const { where } = require('sequelize');
const Item = require('../models/items');


exports.getTable = (req, res, next) => {
    Item.findAll({ order: [['createdAt', 'DESC']] })
        .then( items => {
            const itemQuantity = items.length;
            res.render('table', {
            path: '/inventories',
            items: items,
            itemQuantity: itemQuantity



        })
    }
)}

exports.deleteRow = (req, res, next) => {
    const id = req.params.id
    Item.findByPk(id)
    .then( itemId => {
        return itemId.destroy();
    })
    .then( result => {
        console.log('Item deleted successfully!');
        res.redirect('/inventories')

    })
    .catch( err => console.log(err));

}
