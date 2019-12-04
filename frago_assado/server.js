/*eslint no-console: 0*/
"use strict";
var port = process.env.PORT || 3000;

const express = require("express");

var app = express();
app.get("/", (req, res)=>{res.end("Hello");});
app.get("/adolphinho", (req, res)=>{res.end("Tetinha");});
app.listen(port);

console.log("Server listening on port %d", port);
