'use strict';
const client = require('./twitter/twitter');
require('dotenv').config();

const { data } = await client.get('tweets', { ids: process.env.USER_ID });
console.log(data);

const express = require('express');

const app = express();
app.get('/', (req, res) => {
  res.send('Hello World');
});

const PORT = 8080;
const HOST = '0.0.0.0';
app.listen(PORT, HOST);

console.log(`Running on http://${HOST}:${PORT}`);
