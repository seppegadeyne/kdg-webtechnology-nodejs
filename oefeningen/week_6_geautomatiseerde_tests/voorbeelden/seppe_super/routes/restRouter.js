const express = require('express');
const router = express.Router();

const personen = [
    {id: 142742, naam: "karl", geboortedatum: "5/5/1818"},
    {id: 150217, naam: "ingeborg", geboortedatum: "24/4/1970"},
    {id: 163361, naam: "groucho", geboortedatum: "2/10/1890"}
]

router.get('/', (req, res) => {
    res.json(personen);
});

router.put('/api/personen/:id', (req, res) => {
    console.log(req.params.id);
});

module.exports = router;