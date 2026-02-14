const express = require('express');
const bodyParser = require('body-parser');
const pool = require('./db');
const path = require('path');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// Home Page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Add Page
app.get('/add', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'add.html'));
});

// Dashboard Page
app.get('/dashboard', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'dashboard.html'));
});

// Insert Data
app.post('/add-activity', async (req, res) => {
    try {
        const { date, steps, calories, workout } = req.body;

        await pool.query(
            `INSERT INTO activities (activity_type, calories, steps, created_at)
             VALUES ($1, $2, $3, $4)`,
            [workout, parseInt(calories), parseInt(steps), date]
        );

        res.redirect('/dashboard');
    } catch (err) {
        console.error("INSERT ERROR:", err);
        res.send("Error inserting data");
    }
});

// Fetch Data for Dashboard
app.get('/data', async (req, res) => {
    try {
        const result = await pool.query(
            'SELECT * FROM activities ORDER BY created_at DESC'
        );
        res.json(result.rows);
    } catch (err) {
        console.error("FETCH ERROR:", err);
        res.send("Error fetching data");
    }
});

app.listen(3000, () => {
    console.log("🚀 Server running at http://localhost:3000");
});
