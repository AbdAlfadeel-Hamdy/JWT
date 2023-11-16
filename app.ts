import express from 'express';
import 'express-async-errors';
import dotenv from 'dotenv';
// ROUTERS
// Middlewares
import notFound from './middlewares/notFound.js';
import errorHandler from './middlewares/errorHandler.js';
// Access .env file
dotenv.config();
// Create HTTP Server
const app = express();
// Body Parser
app.use(express.json());
// API ROUTES
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
