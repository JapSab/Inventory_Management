const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const pg = require('pg');
const sequelize = require('./backend/util/database');

const app = express();


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'frontend', 'views'));


app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'frontend', 'public')));

const tableRoutes = require('./backend/routes/table');
const addRoutes = require('./backend/routes/add');




app.use(tableRoutes);
app.use(addRoutes)
sequelize
  .sync()
  .then(() => {
    app.listen(3000);
  })
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });