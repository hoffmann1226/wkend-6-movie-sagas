const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

//GET ROUTE
router.get('/', (req, res) => {
    console.log('in movies router')
    const queryText = 'SELECT * FROM movies';
    pool.query(queryText)
      .then((result) => { res.send(result.rows); })
      .catch((err) => {
        console.log('Error getting movies', err);
        res.sendStatus(500);
      });
  });

  module.exports = router;