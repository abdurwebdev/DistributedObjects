const express = require('express');
const app = express();

app.get("/",(req,res)=>{
  res.send("Distributed Object Running");
})

module.exports = app;