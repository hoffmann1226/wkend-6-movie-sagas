const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

//Get route for all movies on main page
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

  //get route for movie details page
  router.get('/:id', (req, res) => {
    let queryText = `SELECT "movies".id, "movies".title, "movies".poster, "movies".description, 
                        string_agg("genres".name, ', ') AS genre_list FROM "movies"
                        JOIN "movies_genres" ON "movies".id = "movies_genres".movies_id
                        JOIN "genres" ON "genres".id = "movies_genres".genres_id        
                        WHERE "movies".id = $1
                        GROUP BY 1;`;
    pool.query(queryText, [req.params.id]).then(result => {
        res.send(result.rows);
    }).catch((error) => {
        res.sendStatus(500);
    })
})

// PUT call to change movie title and description
router.put('/', (req, res) => {
  let queryText = `UPDATE "movies" SET "title" = $1, "description" = $2 WHERE "id" = $3;`;
  pool.query(queryText, [req.body.title, req.body.description, req.body.id])
      .then(response => {
          res.sendStatus(200);
      }).catch((error) => {
          res.sendStatus(500);
      })
})

  module.exports = router;