const express = require('express');
const cors = require('cors');

const loginRoutes = require('./routers/login.routes');
const registerRoutes = require('./routers/register.routes');
const productsRoutes = require('./routers/products.routes');

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static('public'));

app.use('/', loginRoutes);
app.use('/', registerRoutes);
app.use('/', productsRoutes);

module.exports = app;
