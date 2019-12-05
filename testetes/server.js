/*eslint no-console: 0, no-unused-vars: 0*/
"use strict";

var port  = process.env.PORT || 3000;
const express = require("express");
const consign = require("consign");
const cors = require("cors");
const bodyParser = require('body-parser');

var app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
consign().include("app/routes").into(app);
app.listen(port);