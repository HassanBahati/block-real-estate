const express = require("express");
const app = express();
const path = require("path");
const port  = 5000 || process.env.PORT
require('dotenv').config()

app.get("/api", (req, res) => {
  res.send("this is the api root handler");
});

//serve static assets if in production
if (process.env.NODE_ENV === "production") {
  //set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(port, () => console.log(`Server started`));