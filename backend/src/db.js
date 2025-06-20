require('dotenv').config();
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: process.env.HOST || 'localhost',
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err.stack);
        return;
    }
    console.log('Connected to the database as id ' + connection.threadId);

    // Create foods table if it doesn't exist
    const createTableQuery = `
        CREATE TABLE IF NOT EXISTS foods (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            description TEXT,
            price DECIMAL(10,2) NOT NULL,
            image_url VARCHAR(500)
        )
    `;
    connection.query(createTableQuery, (err) => {
        if (err) {
            console.error('Error creating foods table:', err);
        } else {
            console.log('Foods table is ready.');
        }
    });
});

module.exports = connection;