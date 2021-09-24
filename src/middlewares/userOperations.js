
// Middleware para verificar se o usuário tem cadastro para realizar ações no banco

const { request } = require("express");

function operation(users) {
    return (req, res, next) => {
        const {cpf} = req.headers;
        const id = Number(cpf);
        const user = users.find((element) => element.cpf === id);
        if(user) {
            req.user = user;
            next();
        } else {
            res.status(404).send("Usuário inapto de realizar operação !");
        }
    }
}

module.exports = operation;