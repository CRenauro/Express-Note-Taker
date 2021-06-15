// DEPENDENCIES
// We need to include the path package to get the correct file path for our html

const express = require ("express");
const path = require ("path");
const fs = require ("fs");



// ROUTING

app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/notes.html'));
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});






module.exports = app;