const express = require('express');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');
const authRoutes = require('./controllers/authController');
const userRoutes = require('./controllers/userController');
const transferRoutes = require('./controllers/transferController');

const app = express();

app.use(bodyParser.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use('/auth', authRoutes);
app.use('/users', userRoutes);
app.use('/transfers', transferRoutes);

module.exports = app;