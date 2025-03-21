require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();


const port = process.env.PORT || 5001;


app.use(express.json());


mongoose.connect(process.env.DB_URI || 'mongodb://localhost:27017/myapp')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Database connection error:', err));


app.get('/', (req, res) => {
  res.send('Hello World!');
});


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
}).on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`Port ${port} is already in use. Try using a different port.`);
  } else {
    console.error('Server error:', err);
  }
});
