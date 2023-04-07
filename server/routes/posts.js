const express = require('express');

const { client } = require('../db');

const router = express.Router();

//MAIN routes - CRUD
//get all posts
router.get('/', async (req, res) => {
  try {
    const result = await client.query('select * from posts');
    res.status(200);
    res.json(result.rows);
  } catch (error) {
    console.log(error);
  }
});

//CREATE A POST : Protected route

module.exports = router;
