const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

app.use(express.static("pub"));

app.get("/", (req, res) =>{
  res.send("Homepage");
})

app.get("/about", (req,res) =>{
  res.sendFile(path.join(__dirname, 'pub/about.html'));
})

app.get("/contact-me", (req,res) =>{
  res.sendFile(path.join(__dirname, 'pub/contact-me.html'));
})

app.use((req,res,next) =>{
  res.status(404).sendFile(path.join(__dirname, 'pub/404.html'));
})

app.listen(port, ()=>{
  console.log(`Example app listening on port ${port}!`);
})
