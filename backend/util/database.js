const Sequelize = require('sequelize');
const dotenv = require('dotenv').config()


const sequelize = new Sequelize('inventory-management', process.env.dbUser, process.env.dbPassword, {
    host: 'localhost',
    dialect: 'postgres'
});


module.exports = sequelize;