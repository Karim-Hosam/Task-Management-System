require('dotenv').config();
const mysql = require('mysql2/promise');

// Create a connection to the MySQL database
const connectDB = async () => {
  try {
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: '',
      database: process.env.DB_NAME,
      port: process.env.DB_PORT || 3306,
    });
    console.log('Connected to MySQL database!');
    return connection;
  } catch (err) {
    console.error('Database connection failed:', err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
