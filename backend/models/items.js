const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const Item = sequelize.define('item', {
    id: {
        type: Sequelize.INTEGER,
        autoInrement: true,
        allowNull: false,
        primaryKey: true
    },
    
    name: {
        type: Sequelize.STRING
    },

    price: {
        type: Sequelize.DOUBLE,
        allowNull: false
    }
});

module.exports = Item;