"use strict";

const express = require("express");
const app = express();
app.listen(4000);

const morganLog = require("morgan");
app.use(morganLog("dev"));

// TODO opdracht 1 stap 1
//  laat urls beginnende met "/<naam_entiteit>" behandelen door de routes/hoofd.js router
const developers = require('./routes/hoofd');
app.use(express.json());
app.use('/developers', developers);
