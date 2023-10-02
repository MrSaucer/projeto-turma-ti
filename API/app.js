import express from 'express';
import mysql from 'mysql';
import cors from 'cors';


const app = express();
app.use(express.json());

app.use(cors());

// MySQL connection configuration
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',  // Replace with your MySQL username
  password: '',  // Replace with your MySQL password
  database: 'projetoionic'
});

db.connect((err) => {
  if (err) throw err;
  console.log('Connected to the database.');
});

// GET: Fetch all users
app.get('/users', (req, res) => {
  const sql = 'SELECT * FROM users';
  db.query(sql, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// POST: Create new user
//app.post('/users', (req, res) => {
//  const newUser = req.body;
 // const sql = 'INSERT INTO users SET ?';
 // db.query(sql, newUser, (err, result) => {
 //   if (err) throw err;
//res.json({ id: result.insertId, ...newUser });
//  });
//});

// Listening on port 3000
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000/');
});
