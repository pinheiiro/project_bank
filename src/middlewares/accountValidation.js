
// Middleware para verificar se existe uma conta

function validation(users) {
    return (req, res, next) => {
        const {cpf} = req.body;
        const verifica = users.some((element) => element.cpf === cpf);
        if (!verifica) {
            next();
        } else {
            res.status(400).send("Usuário existente !");
        }
    };
}

module.exports = validation;