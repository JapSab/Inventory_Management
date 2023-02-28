const express = require('express');
const pg = require('pg');
const sequelize = require('./backend/util/database');



sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });