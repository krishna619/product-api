import express from 'express';
import cors from 'cors';
import { config } from './config/config.js';
import { errorHandler } from './middleware/errorHandler.js';
import productsRouter from './routes/products.js';

const app = express();

// Middleware
app.use(cors({
  origin: config.corsOrigin
}));
app.use(express.json());

// Routes
app.use('/products', productsRouter);

// Health check
app.get('/health', (req, res) => {
  res.json({ 
    status: 'healthy', 
    environment: config.nodeEnv,
    timestamp: new Date().toISOString() 
  });
});

// Error handler
app.use(errorHandler);

// Start server
app.listen(config.port, () => {
  console.log(`Server running in ${config.nodeEnv} mode on port ${config.port}`);
});