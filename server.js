// Import required modules
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const billingRoutes = require('./routes/billingRoute');

// Load environment variables
dotenv.config();

// Initialize app
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Database connection
connectDB().then(() => {
    console.log('Database connected...');
}).catch((err) => {
    console.error('Database connection failed:', err);
    process.exit(1); // Exit the process if database connection fails
});

// Basic route
app.get('/', (req, res) => res.send('API is running...'));

// Billing route
app.use('/api/billing', billingRoutes);

// Set port and start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));