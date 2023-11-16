import { Router } from 'express';
import { dashboard } from '../controllers/dashboard.js';

const app = Router();

app.route('/').get(dashboard);

export default app;
