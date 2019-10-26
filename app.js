// MONGO CONNECTION STRING FOR COMPASS
// mongodb+srv://slimpickens:bomb2hell@rte-evesk.gcp.mongodb.net/test

const express = require("express");
const mongoose = require("mongoose");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv/config");

// MIDDLEWARES
app.use(cors());
app.use(bodyParser.json());

//Import routes
const postsRoute = require("./routes/posts");
const membersRoute = require("./routes/members");
const eventRoute = require("./routes/event");

app.use("/posts", postsRoute);
app.use("/members", membersRoute);
app.use("/event", eventRoute);

// ROUTES
app.get("/", (req, res) => {
  res.send("This is the home page");
});

//DB connect
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("Connected to DB!")
);

// LISTENING
app.listen(8080);
