const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const port = process.env.PORT || 3000;
const db = new sqlite3.Database('./ecommerce.db', (err) => {
    if (err) {
        return console.error(err.message);
    }
    console.log('Connected to the SQlite database.');
});

const cors = require('cors');
app.use(cors());

app.use(bodyParser.json());

// Initialize database
db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS products (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        description TEXT,
        price REAL,
        format TEXT
    )`);

    db.run(`CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        email TEXT UNIQUE NOT NULL,
        password TEXT NOT NULL
    )`);

    // db.run(`ALTER TABLE products
    //     ADD thumbnail_image TEXT,
    //     ADD main_image TEXT
    // )`);
});

// Define API endpoints

// Add a new product
app.post('/products', (req, res) => {
    const { name, description, price, format } = req.body;
    const sql = `INSERT INTO products (
        name, 
        description, 
        price, 
        format
    ) VALUES (?, ?, ?, ?)`;
    db.run(sql, [name, description, price, format], function(err) {
        if (err) {
            return res.status(400).send({ error: err.message });
        }
        res.status(201).send({ id: this.lastID });
    });
});

// Delete a product
app.delete('/products/:id', (req, res) => {
    const id = req.params.id;
    const sql = 'DELETE FROM products WHERE id = ?';

    db.run(sql, id, function(err) {
        if (err) {
            return res.status(400).send({ error: err.message });
        }
        if (this.changes === 0) {
            return res.status(404).send({ error: 'Product not found' });
        }
        res.status(200).send({ message: 'Product deleted successfully' });
    });
});

// Get all products
app.get('/products', (req, res) => {
    const sql = `SELECT * FROM products`;
    db.all(sql, [], (err, rows) => {
        if (err) {
            return res.status(500).send({ error: err.message });
        }
        res.status(200).send(rows);
    });
});

// Register a new user
app.post('/users/register', (req, res) => {
    const { email, password } = req.body;
    const sql = `INSERT INTO users (email, password) VALUES (?, ?)`;
    db.run(sql, [email, password], function(err) {
        if (err) {
            return res.status(400).send({ error: err.message });
        }
        res.status(201).send({ id: this.lastID });
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

// Handle shutdown
process.on('SIGINT', () => {
    db.close(() => {
        console.log('Database connection closed.');
        process.exit(0);
    });
});
