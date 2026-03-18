const express = require('express');
const app = express();

app.get("/",(req,res)=>{
  res.status.json({
    message:"You called an Distributed Object",
  });
})

module.exports = app;