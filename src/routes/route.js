const express = require('express');
const validation = require("../middlewares/accountValidation");
const router = express.Router();

const users = [
    {
        name: "Pinheiro",
        cpf: 1243434234
    }
]

router.get('/', (req, res) => {
    res.json({message: "Hello, World !"});
});

router.post('/', validation(users), (req, res) => {
    const user = req.body;
    users.push(user);
    res.json(users);
});

module.exports = router;