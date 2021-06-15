// sets up the express app
const express = require("express");

// Initialize the application and create my port
const app = express();
const PORT = process.env.PORT || 3000;

// require routes
const htmlRoutes = require("./routes/htmlRoutes");
const apiRoutes = require("./routes/apiRoutes");

// setting up the body parsing for static and routing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// bring in routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);
// localhost:3000/notes <--if we go here, we want to see the notes.html page

// start my server
app.listen(PORT, () => console.log(`My app is running on PORT: ${PORT}`));
