const express = require('express');

require('dotenv').config();

const PORT = process.env.PORT || 5000;

const app = express();

require('./db')()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error(`Error in database connection : ${err.message}`);
  });
