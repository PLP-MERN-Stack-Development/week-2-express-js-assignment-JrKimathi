const express = require('express');
const bodyParser = require('body-parser');
const productsRoutes = require('./routes/products');
const logger = require('./middleware/logger');
const auth = require('./middleware/auth');
const errorHandler = require('./middleware/ErrorHandler');

const app = express();
const PORT = 3000;

// DEBUG
console.log('logger type:', typeof logger);
console.log('auth type:', typeof auth);
console.log('productsRoutes type:', typeof productsRoutes);
console.log('errorHandler type:', typeof errorHandler);

// Middleware
app.use(logger);
app.use(bodyParser.json());
app.use(auth);

// Routes
app.use('/api/products', productsRoutes);

// Root Route
app.get('/', (req, res) => {
    res.send('Hello World from Express.js!');
});

// Global Error Handler
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
