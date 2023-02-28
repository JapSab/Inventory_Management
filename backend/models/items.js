const { DataTypes } = require('sequelize');
const sequelize = require('../util/database');

const Item = sequelize.define('item', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
    
    itemName: {
        type: DataTypes.STRING,
        allowNull: false

    },

    selectedLocation: {
        type: DataTypes.STRING,
        allowNull: false

    },

    itemPrice: {
        type: DataTypes.DOUBLE,
        allowNull: false

    }
});


module.exports = Item;