// import items needed
const router = require('express').Router();
const store = require('../db/store')

// make a GET request with all notes from the database

router.get('/notes', (req, res) => {
    store
    .getNotes()
    .then((notes) => {
        return res.json(notes);
    })
    .catch((err) => res.status(500).json(err));
})

// create a post request // IS THIS CORRECT?
router.post('/notes', (req, res) => {
    fetch
    .then((notes) => {
      return res.json(notes);
    })
    .catch((err) => res.status(500).json(err));
})


// create a delete request
//router.delete()




module.exports = router;
