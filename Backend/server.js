require('dotenv').config();

const mysql = require('mysql2/promise');
const cors = require('cors');
const axios = require('axios');
const express = require('express');
const crypto = require('crypto');
const secretKey = crypto.randomBytes(64).toString('hex');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const databaseConnectionConfig = {
  host: process.env.DB_HOST,
  user:  process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE
};

let connection; // Declare a variable to store the connection

async function connectToDatabase() {
  try {
    connection = await mysql.createConnection(databaseConnectionConfig);
    console.log('Successfully connected to MySQL database');
  } catch (error) {
    console.error('Error connecting to MySQL database:', error);
    throw error;
  }
}

connectToDatabase(); // Call the function to establish the connection

// Now you can use the 'connection' variable to query the database in your endpoints

app.post('/login', async (req, res) => {
  try {
    const { username, password, role } = req.body;
    console.log(password);
    const [rows] = await connection.query('SELECT * FROM login WHERE username = ?', [username]);
    
    if (rows.length === 0) {
      return res.status(404).json({ message: 'User not found' });
    }

    const user = rows[0];
    
    // Check password
    if (password !== user.password) {
      return res.status(401).json({ message: 'Invalid password' });
    }

    // Check password
    // if (!bcrypt.compareSync(password, user.password)) {
    //   console.log(user.password);
    //   return res.status(401).json({ message: 'Invalid password' });
    // }

    // Check role
    if (user.role !== role) {
      console.log(user.role,role);
      return res.status(403).json({ message: 'User role does not match' });
    }

    // Generate JWT token
    const token = jwt.sign({ userId: user.id, role: user.role }, 'secret_key', { expiresIn: '1h' });

    res.json({ token });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.post('/ApplicationSubmission', async (req, res) => {

  console.log(req.body);

});

app.listen(PORT, () => {
  console.log("Server Listening on Port:",PORT);
})


