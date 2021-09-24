const express = require('express');
const {v4: uuidv4 } = require('uuid');
const validation = require('../middlewares/accountValidation');
const operation = require('../middlewares/userOperations');
const Service = require('../services/accountMovement');
const router = express.Router();

// Array com dados de todos os usuários cadastrados
const users = [
    {
        id: uuidv4(),
        name: "Pinheiro",
        cpf: 1243434234,
        saldo: 0,
        statement: []
    }
]

// Rota de teste para listar todos os usuários cadastrados
router.get('/', (req, res) => {
    const information = users.map((user) => ({
        id: user.id,
        name: user.name,
        cpf: user.cpf,
        saldo: user.saldo,
    }));
    res.json(information);
});

// Rota para criação de conta
router.post('/', validation(users), (req, res) => {
    const {name, cpf} = req.body;
    const id = uuidv4()
    const saldo = 0;
    const statement = [];
    users.push({id, name, cpf, saldo, statement});
    res.json({message: "successfully", id, name, cpf, saldo});
});

// Rota para realizar saque
router.post('/withdraw', operation(users), (req, res) => {
    const {user} = req;
    const {value, description} = req.body;
    const type = "deposit"
    const transaction = new Service();
    const details = transaction.credit(user, value, description, type);
    res.json(details);
});

// Rota para realizar depósito
router.post('/deposit', operation(users), (req, res) => {
    const {user} = req;
    res.json(user);
});

router.get('/extract', operation(users), (req, res) => {
    const {user} = req;
    res.status(200).json(user.statement);
});

module.exports = router;