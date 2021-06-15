// import items needed
const app = require('express').Router();
// const store = require('../db/store');
const fetch = require("node-fetch");
const fs = require("fs");
const { v4: uuidv4 } = require('uuid');

// make a GET request with all notes from the database

// module.exports = function(router){

// };

app.get('/notes', (req, res) => {
  fs.readFile('db/db.json', 'utf8', function(error,data) {
    res.json(JSON.parse(data));
  });
});



app.post('/notes', (req,res) => {
  var temp;
  fs.readFile('db/db.json', 'utf8', function(error,data) {
    var newNote = req.body;
    newNote.id = uuidv4();
    temp = JSON.parse(data);
      temp.push(newNote);
      fs.writeFile('db/db.json', JSON.stringify(temp), function(error) {
          if (error)
          throw error;
          console.log("successful");
      })
    });
    res.json(temp);
});

function deleteNote(id, newNote) {
    for (let i = 0; i < newNote.length; i++) {
        let note = newNote[i];

        if (note.id == id) {
            newNote.splice(i, 1);
            fs.writeFileSync(
                path.join(__dirname, './db/db.json'),
                JSON.stringify(newNote, null, 2)
            );

            break;
        }
    }
};

app.delete('/api/notes/:id', (req, res) => {
  deleteNote(req.params.id, newNote);
  res.json(true);
});

module.exports = app;
