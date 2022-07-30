const page = require('express').Router();
const path = require('path');

// notes page GET route
page.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '../public/notes.html'))
);

// home page GET route 
page.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '../public/index.html'))
);

module.exports = page;
