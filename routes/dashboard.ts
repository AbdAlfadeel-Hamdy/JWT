import { Router } from 'express';
import { getDashboardInfo } from '../controllers/dashboard.js';
import authenticateUser from '../middlewares/auth.js';

const app = Router();

app.route('/').get(authenticateUser, getDashboardInfo);

export default app;
