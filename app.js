const express = require("express");
const app = express();
const PORT = 3000;

const user = require("./model/schema");

require("./db/connection");
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("homepage");
  const {Name,Email} = req.query
  console.log(Name, '\n', Email)
});

app.get("/formpage", (req, res) => {
  res.render("formpage");
});

app.post("/formpage", (req, res) => {
  
});


app.post("/", (req, res) => {
    
});
app.listen(PORT, () => console.log("app Listening", PORT));
