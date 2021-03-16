'use strict';
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const app = express();

const client = require('./twitter/twitter');

const { data } = await client.get('tweets', { ids: process.env.USER_ID });
console.log(data);

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello World');
});

const PORT = process.env.port || process.env.PORT || 5000;
const HOST = process.env.host || process.env.HOST || '0.0.0.0';
app.listen(PORT, HOST);

console.log(`Running on http://${HOST}:${PORT}`);
