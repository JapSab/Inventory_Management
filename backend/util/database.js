const Sequelize = require('sequelize');

const sequelize = new Sequelize('inventory-management', 'jafara', 'jafara212', {
    host: 'localhost',
    dialect: 'postgres'
});


module.exports = sequelize;