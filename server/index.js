const express = require('express');

const { connectDB } = require('./db');

require('dotenv').config();

const PORT = process.env.PORT || 5000;

const app = express();

app.get('/', (req, res) => {
  res.send('hello');
});

app.use('/api/v1/posts', require('./routes/posts'));

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error(`Error in database connection : ${err.message}`);
  });
