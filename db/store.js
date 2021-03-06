const util = require("util");
const fs = require("fs");
//used to genererate a unique id.

// const uuidv1 = require('uuid');
const { v4: uuidv4 } = require('uuid');
uuidv4(); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

class Store {
    getNotes(){
        return readFileAsync('db/db.json', 'utf8')
    }

    write(note) {
        return writeFileAsync('db/db.json', JSON.stringify(note));
    }



    //create function to getNotes
    //create function to addNotes


    // create a function to removeNotes BY ID YOU CANNOT DO THIS WITHOUT GETTING UUID TO WORK


}

//export new store

module.exports = new Store();