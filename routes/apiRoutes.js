const notes = require('express').Router();
const { readAndAppend, readFromFile } = require('../helpers/fsUtils');
const fs = require('fs');

notes.get('/api/notes', (req, res) => {
  console.log("Text");
  readFromFile("./db/db.json", "utf8").then((data) => {
    console.log(JSON.parse(data))
    res.json(JSON.parse(data))
  });
});

notes.post('/api/notes', (req, res) => {
  console.info(`${req.method} request received to add a note`);
  console.log(`${req.method} has been added for review`);

  const { title, text } = req.body;

  if (title && text) {
    const newNote = {
      title,
      text
    }

    readFromFile("./db/db.json", 'utf8', (err, data) => {
      if (err) {
        console.error(err);
      } else {
        const parsedNotes = JSON.parse(data);

        parsedNotes.push(newNote);
        console.log(parsedNotes);
        res.status(201).json(parsedNotes);

        fs.writeFile(
          './db/db.json',
          JSON.stringify(parsedNotes, null, 4),
          (writeErr) =>
            writeErr
              ? console.error(writeErr)
              : console.info('Successfully updated reviews!')
        );
      }
    });
  } else {
    res.status(500).json('Error in posting note');
  }
});

module.exports = notes;