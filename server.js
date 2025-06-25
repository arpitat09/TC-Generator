// server.js
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const path = require('path');
const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/public', express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// MySQL Connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Arpita@123',
  database: 'tc_generator'
});

db.connect(err => {
  if (err) throw err;
  console.log('MySQL connected.');
});

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.post('/generate', (req, res) => {
  const {
    name, usn, branch, year_of_join, year_of_exit,
    reason, class: className, semester, academic_year, performance
  } = req.body;

  const sql = `INSERT INTO tc_data 
    (name, usn, branch, year_of_join, year_of_exit, reason, class, semester, academic_year, performance) 
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

  db.query(sql, [name, usn, branch, year_of_join, year_of_exit, reason, className, semester, academic_year, performance], (err, result) => {
    if (err) throw err;

    res.render('certificate', {
      name, usn, branch, year_of_join, year_of_exit,
      reason, className, semester, academic_year, performance
    });
  });
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
