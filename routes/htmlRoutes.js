const page = require('express').Router();

// home page GET route 
page.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

// notes page GET route
page.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

module.exports = page;
