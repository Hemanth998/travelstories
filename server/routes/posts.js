const express = require('express');

const { client } = require('../db');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const result = await client.query('select * from posts');
    res.json(result.rows);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
