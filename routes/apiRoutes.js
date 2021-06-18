// // import items needed

const fs = require("fs");
const { v4: uuidv4 } = require('uuid');

module.exports = function(app) {
  // API GET Requests

   // /api/notes reads the json file and returns all saved notes as JSON
  app.get('/api/notes', function (req, res) {
    fs.readFile("db/db.json", "utf8", function(error,data) {
      res.json(JSON.parse(data));
    });
    
  });

  // API POST Requests

  // Receives a new note to save, adds it to the json file, and then returns the new note in the browser

    app.post("/api/notes", function(req, res) {
    var newNote = req.body;
    newNote.id = uuidv4();
      fs.readFile("db/db.json", "utf8", function(error,data) {
        var data = JSON.parse(data);
        data.push(newNote);
        fs.writeFile("db/db.json", JSON.stringify(data), function(error){
          if (error)
           throw error;
           console.log("Written Successfully");
        })
      });
      res.json(newNote);

    });

    app.delete("/api/notes/:id", function(req, res) {
      fs.readFile("db/db.json", "utf8", function(error, data) {
        let noteId = req.params.id;
        let noteData = JSON.parse(data);
        noteData = noteData.filter(function(note) {
            if (noteId != note.id) {
              return true;
            } else {
              return false;
            };
        }); 
        fs.writeFile("db/db.json", JSON.stringify(noteData), function(error){
          if (error)
          throw error;
          res.end(console.log("Deleted Successfully"));
        })
      });

    });

};
