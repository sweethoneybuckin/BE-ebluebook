import express from 'express';
import cors from 'cors';
import sequelize from './config/database.js';

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Test database connection
sequelize.authenticate()
  .then(() => {
    console.log('Database connection established successfully.');
    
    // Sync database models
    return sequelize.sync({ alter: false }); // Use { force: true } to drop and recreate tables (WARNING: deletes data)
  })
  .then(() => {
    console.log('Database synchronized successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

// Import routes
import creatorRoutes from './routes/creatorRoutes.js';
import administratorRoutes from './routes/administratorRoutes.js';
import approvalRoutes from './routes/approvalRoutes.js';
import refineryUnitRoutes from './routes/refineryUnitRoutes.js';
import dashboardRoutes from './routes/dashboardRoutes.js';
import currencyRoutes from './routes/currencyRoutes.js';
import plantRoutes from './routes/plantRoutes.js';
import classificationRoutes from './routes/classificationRoutes.js';
import categoryRoutes from './routes/categoryRoutes.js';
import brandListRoutes from './routes/brandListRoutes.js';
import blueBookDBRoutes from './routes/blueBookDBRoutes.js';
import logHistoryRoutes from './routes/logHistoryRoutes.js';

// Basic route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the Intern Management API' });
});

// Use routes
app.use('/api/creators', creatorRoutes);
app.use('/api/administrators', administratorRoutes);
app.use('/api/approvals', approvalRoutes);
app.use('/api/refinery-units', refineryUnitRoutes);
app.use('/api/dashboards', dashboardRoutes);
app.use('/api/currencies', currencyRoutes);
app.use('/api/plants', plantRoutes);
app.use('/api/classifications', classificationRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/brands', brandListRoutes);
app.use('/api/bluebooks', blueBookDBRoutes);
app.use('/api/log-histories', logHistoryRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ 
    message: 'Something went wrong!', 
    error: process.env.NODE_ENV === 'development' ? err.message : {} 
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});