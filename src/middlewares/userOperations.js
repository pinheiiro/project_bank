
// Middleware para verificar se o usuário tem cadastro para realizar ações no banco

function operation(users) {
    return (req, res, next) => {
        const {cpf} = req.headers;
        const id = Number(cpf);
        const search = users.some((element) => element.cpf === id);
        if(search) {
            next();
        } else {
            res.status(404).send("Usuário inapto de realizar operação !");
        }
    }
}

module.exports = operation;