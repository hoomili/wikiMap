// load .env data into process.env
require("dotenv").config();

// Web server config
const sassMiddleware = require("./lib/sass-middleware");
const express = require("express");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");

const PORT = process.env.PORT || 8080;
const app = express();

app.set("view engine", "ejs");

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(
  "/styles",
  sassMiddleware({
    source: __dirname + "/styles",
    destination: __dirname + "/public/styles",
    isSass: false, // false => scss, true => sass
  })
);
app.use(express.static("public"));
app.use(cookieParser());

// Separated Routes for each Resource
// Note: Feel free to replace the example routes below with your own
const userApiRoutes = require("./routes/users-api");
const widgetApiRoutes = require("./routes/widgets-api");
const usersRoutes = require("./routes/users");
const mapsIDRoutes = require("./routes/maps-id");
const mapsRoutes = require("./routes/maps");
const profileRoutes = require("./routes/profiles");
const newMapRoutes = require("./routes/new-map");
const favouriteMapRoutes = require("./routes/favourites-api");
const loginRoutes = require("./routes/login");
const logoutRoutes = require("./routes/logout");
// const newMapPostRoutes = require("./routes/new-map-api");

// Mount all resource routes
// Note: Feel free to replace the example routes below with your own
// Note: Endpoints that return data (eg. JSON) usually start with `/api`
app.use("/api/users", userApiRoutes);
app.use("/users", usersRoutes);
app.use("/maps/:id", mapsIDRoutes);
app.use("/maps", mapsRoutes);
app.use("/profiles", profileRoutes);
app.use("/new-map", newMapRoutes);
app.use("/favourite", favouriteMapRoutes);
app.use("/login", loginRoutes);
app.use("/logout", logoutRoutes);
// app.use("/map/:id", newMapPostRoutes);
// Note: mount other resources here, using the same pattern above

// Home page
// Warning: avoid creating more routes in this file!
// Separate them into separate routes files (see above).

app.get("/", (req, res) => {
  res.redirect("/maps");
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
