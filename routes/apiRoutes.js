const notes = require('express').Router();
const { readAndAppend, readFromFile } = require('../helpers/fsUtils');

notes.get('api/notes', (req, res) => {
    readFromFile('../db/db.json').then((data) => res.json(JSON.parse(data)));
});

notes.post('api/notes', (req, res) => {
    console.info(`${req.method} request received to add a note`);
    console.log(req.body);
  
    const { username,  note } = req.body;
  
    if (req.body) {
      const newNote = {
        username,
        note
      };
  
      readAndAppend(newNote, './db/db.json');
      res.json(`Note added successfully 🚀`);
    } else {
      res.error('Error in adding note');
    }
  });

  module.exports = notes;