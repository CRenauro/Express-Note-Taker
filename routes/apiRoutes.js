// import items needed
const router = require('express').Router();
const store = require('../db/store')
const fetch = require("node-fetch");

// make a GET request with all notes from the database

router.get('/notes', (req, res) => {
  fetch
    .then((notes) => {
        return res.json(notes);
    })
    .catch((err) => res.status(500).json(err));
})

// create a post request 
router.post('/notes', (req, res) => {
  fetch
    .then((notes) => {
      return res.json(notes);
    })
    .catch((err) => res.status(500).json(err));
})


// create a delete request
router.delete('/notes', (req, res) => {
  fetch
    .then((notes) => {
      return res.json(notes);
    })
    .catch((err) => res.status(500).json(err));
})




module.exports = router;
