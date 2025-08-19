import express from 'express';
import bodyParser from 'body-parser';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from '../swagger.json' assert { type: 'json' };
import authRoutes from './controllers/authController.js';
import userRoutes from './controllers/userController.js';
import transferRoutes from './controllers/transferController.js';

const app = express();

app.use(bodyParser.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use('/auth', authRoutes);
app.use('/users', userRoutes);
app.use('/transfers', transferRoutes);

export default app;