import { Router } from 'express';
import { login } from '../controllers/auth.js';

const app = Router();

app.route('/login').post(login);

export default app;
