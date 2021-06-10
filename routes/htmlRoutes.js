// DEPENDENCIES
// We need to include the path package to get the correct file path for our html

const path = require('path');
const app = require('express').Router();



// ROUTING

app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/notes.html'));
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});






module.exports = app;