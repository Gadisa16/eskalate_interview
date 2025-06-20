require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Add this line
const foodRoutes = require('./routes/foodRoutes');
const db = require('./db');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors()); // Enable CORS for all routes
app.use(bodyParser.json());

app.use('/api/foods', foodRoutes);

db.connect(err => {
    if (err) {
        console.error('Database connection failed:', err);
        process.exit(1);
    } else {
        console.log('Connected to the database');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});