// Import anything we need
const express = require('express');

// require routes
const htmlRoutes = require('./routes/htmlRoutes');
const apiRoutes = require('./routes/apiRoutes');



// Initialize the application and create my port
const app = express();
const PORT = process.env.PORT || 3000;

// setting up the body parsing for static and routing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// bring in routes
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);
// localhost:3000/notes <--if we go here, we want to see the notes.html page




// start my server
app.listen(PORT, () => console.log(`My app is running on PORT: ${PORT}`));