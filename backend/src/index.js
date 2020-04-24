require('dotenv').config()
const express = require('express');

const app = express();
const routes = require('./routes.js');

app.use(express.json());
app.use(routes);

app.listen(process.env.PORT);
