// creating a route to Login a new user using their details email and password
//req type = POST
//Req body should be username and password

const jwt = require('jsonwebtoken');

const express = require('express');

const bcrypt = require('bcrypt');

require('dotenv').config();

const auth = require('../middleware/auth');

const { client } = require('../db');

const router = express.Router();

router.post('/', async (req, res) => {
  const { email, password } = req.body;

  const emailREGEX = /\S+@\S+\.\S+/;
  if (!emailREGEX.test(email)) {
    return res.status(400).json({ errors: [{ msg: 'Enter a valid email' }] });
  }

  if (password.length === 0) {
    return res
      .status(400)
      .json({ errors: [{ msg: 'Please dont leave password blank' }] });
  }

  try {
    const result = await client.query('SELECT * FROM users WHERE email = $1', [
      email,
    ]);

    if (result.rows.length === 0) {
      return res.status(400).json({ errors: [{ msg: "User doesn't exist" }] });
    }

    const user = result.rows[0];

    if (password !== user.password) {
      return res.status(400).json({ errors: [{ msg: 'Incorrect Password' }] });
    }

    // const isMatch = await bcrypt.compare(password, user.password);

    // if (!isMatch) {
    //   return res.status(400).json({ errors: [{ msg: 'Incorrect password' }] });
    // }

    const payload = {
      user: {
        id: user.id,
        userType: user.user_type,
      },
    };

    jwt.sign(
      payload,
      process.env.JWTSECRET,
      { expiresIn: '1h' },
      (err, token) => {
        if (err) throw err;
        res.status(200).json({ token });
      }
    );
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
});

//Test route
router.get('/', auth, async (req, res) => {
  try {
    const result = await client.query('SELECT * FROM users WHERE id = $1', [
      req.user.id,
    ]);

    const user = result.rows[0];
    res.status(200).json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).json('Internal Server Error');
  }
});

module.exports = router;
