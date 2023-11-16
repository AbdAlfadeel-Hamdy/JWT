import express from 'express';
import 'express-async-errors';
import dotenv from 'dotenv';
// ROUTERS
import authRouter from './routes/auth.js';
import dashboardRouter from './routes/dashboard.js';
// Middlewares
import notFound from './middlewares/notFound.js';
import errorHandler from './middlewares/errorHandler.js';
// Access .env file
dotenv.config();
// Create HTTP Server
const app = express();
// Body Parser
app.use(express.json());
// Serving Static Files
app.use(express.static('./public'));
// API ROUTES
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/dashboard', dashboardRouter);
// NOT FOUND Handler
app.use(notFound);
// Global Error Handler
app.use(errorHandler);
// Start Listening
try {
  const port = process.env.PORT || 5000;
  app.listen(port, () => console.log(`Server is listening on port ${port}...`));
} catch (error) {
  console.log(error);
  process.exit(0);
}
