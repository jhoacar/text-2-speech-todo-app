const { urlencoded } = require('express');
const express = require('express');
const cors = require('cors');
const routes = require('../routes');

const app = express();

app.use(express.json());
app.use(urlencoded({ extended: false }));
app.use(cors());
app.use(routes);

module.exports = app;
