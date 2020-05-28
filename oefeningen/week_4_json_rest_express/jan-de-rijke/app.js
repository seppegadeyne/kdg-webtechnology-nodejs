"use strict";

const express = require("express");

const app = express();
app.use(express.urlencoded());

const categories = [
    {
        "id": 1,
        "naam": "Zuivel"
    },
    {
        "id": 2,
        "naam": "Droge voeding"
    },
    {
        "id": 3,
        "naam": "Groenten en fruit"
    }
];

app.listen(4000);

function showCategories(req, res) {
    res.json(categories);
}

app.get("/cat", showCategories);

function addCategory(req, res) {
    console.log(req.body);
    //console.log(req);
    const category = req.body;
    category.id = categories.length + 1;

    categories.push(category);
    res.json(categories);
}

app.post("/cat", addCategory);