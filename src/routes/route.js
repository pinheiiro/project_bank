const express = require('express');
const { reset } = require('nodemon');
const {v4: uuidv4 } = require('uuid');
const validation = require('../middlewares/accountValidation');
const operation = require('../middlewares/userOperations');
const router = express.Router();

const users = [
    {
        id: uuidv4(),
        name: "Pinheiro",
        cpf: 1243434234,
        statement: []
    }
]

router.get('/', (req, res) => {
    res.json(users);
});

router.post('/', validation(users), (req, res) => {
    const {name, cpf} = req.body;
    const id = uuidv4()
    const statement = [];
    users.push({id, name, cpf, statement});
    res.json({message: "successfully", id, name, cpf});
});

router.post('/withdraw', operation(users), (req, res) => {
    const {cpf} = req.headers;
    res.json({cpf});
});

router.post('/deposit', operation(users), (req, res) => {
    const {cpf} = req.headers;
    res.json({cpf});
});

module.exports = router;