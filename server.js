const path = require('path');
const express = require('express');
const cors = require('cors');

require('dotenv').config();

const app = express();

app.use(cors())

// API - test
app.get('/api/hello', function (req, res) {
  console.log('hello')
  return res.send('Hello Server')
})

// API - Get config
app.get('/api/config', function (req, res) {
  console.log('config')
  return res.json({ jupyterhub_url: process.env.JUPYTERHUB_URL, argo_url: process.env.ARGO_URL, superset_url: process.env.SUPERSET_URL })
})

/* Server */ 
app.use(express.static(path.join(__dirname, '/dist')));

app.listen(process.env.LISTEN_PORT, function () {
  console.log(`App running on port ${process.env.LISTEN_PORT}`);
});
