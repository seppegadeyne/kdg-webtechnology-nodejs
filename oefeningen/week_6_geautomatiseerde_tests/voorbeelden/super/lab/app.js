/** Created by Jan de Rijke */
"use strict";

const express = require("express");
const app = express();

// Eerst in een terminal in deze map:
// npm init
// npm install --save morgan
const morganLog = require("morgan");
app.use(morganLog("dev"));

const speeldagRouter=require("./routes/speeldagRouter");

app.use(express.static("public"));

app.use("/api/speeldagen", speeldagRouter);

module.exports=app;

