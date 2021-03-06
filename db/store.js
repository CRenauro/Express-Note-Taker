const util = require("util");
const fs = require("fs");
//used to genererate a unique id.

// const uuidv1 = require('uuid');
const { v4: uuidv4 } = require('uuid');
uuidv4(); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

module.exports = function(app){
    
    app.get('/api/notes', function (req,res) {
        fs.readFile('db/db.json', 'utf8', function(error,data) {
            res.json(JSON.parse(data));
        });
    });

        app.post('/api/notes', function (req,res) {
        var newNote = req.body;
        newNote.id = uuidv4();
        fs.readFile('db/db.json', 'utf8', function(error,data) {
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

        app.delete('/api/notes/:id', function (req, res) {
            fs.readFile('db/db.json', 'utf8', function(error,data) {
                var noteId = req.params.id;
                var noteData = json.parse(data);
                noteData = noteData.filter(function(app) {
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
};