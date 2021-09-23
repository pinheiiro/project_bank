const express = require('express');
const {v4: uuidv4 } = require('uuid');
const validation = require("../middlewares/accountValidation");
const router = express.Router();

const users = [
    {
        id: uuidv4(),
        name: "Pinheiro",
        cpf: 1243434234
    }
]

router.get('/', (req, res) => {
    res.json(users);
});

router.post('/', validation(users), (req, res) => {
    const {name, cpf} = req.body;
    const id = uuidv4()
    users.push({id, name, cpf});
    res.json({message: "successfully", id, name, cpf});
});

module.exports = router;