const express = require('express');
const crudRouter = require('./crud/routes');

const app = express();

// For body request parsing
app.use(express.json());

// Routes
app.use('/api/v1/crud', crudRouter);

module.exports = app;