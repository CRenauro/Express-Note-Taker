// import items needed
const router = require('express').Router();
const store = require('../db/store');
const fetch = require("node-fetch");
const fs = require("fs");

// make a GET request with all notes from the database

// module.exports = function(router){

// };

router.get('/notes', (req, res) => {
  fs.readFile('db/db.json', 'utf8', function(error,data) {
    res.json(JSON.parse(data));
  });
});

router.post('/api/notes', (req,res) => {
  fs.readFile('db/db.json', 'utf8', function(error,data) {
    var newNote = req.body;
    newNote.id = uuidv4();
    var data = json.parse(data);
      data.push(newNote);
      fs.writeFile('db/db.json', json.stringify(data), function(error) {
          if (error)
          throw error;
          console.log("successful");
      })
    });
    res.json(newNote);
  });

router.delete('/api/notes/:id', function (req, res) {
  fs.readFile('db/db.json', 'utf8', function(error,data) {
      var noteId = req.params.id;
      var noteData = json.parse(data);
      noteData = noteData.filter(function(store) {
          if (noteId != note.id) {
              return true;
          }  else {
              return false;
          };
      });
      fs.writeFile('db/db.json', json.stringify(noteData), function(error) {
          if (error)
          throw error;
          res.end(console.log("deleted"));
      })
  });
});


// // create a post request 



// // create a delete request
// router.delete('/notes', (req, res) => {
//   fetch
//     .then((notes) => {
//       return res.json(notes);
//     })
//     .catch((err) => res.status(500).json(err));
// })




module.exports = router;
