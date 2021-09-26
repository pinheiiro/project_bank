
// Função para retornar a data atual
function today() {
    const d = new Date();
    const day = {
        hora: `${d.getHours()}:${d.getMinutes()}`, 
        day: `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`
    };
    return day;
}

// Classe específica para transações de crédito ou debito na conta do usuário
class Account {

    credit(user, value, description, type) {
        user.saldo = user.saldo + value;
        const date = today(); 
        user.statement.push({saldo: user.saldo, value, description, type, date});
        return {saldo: user.saldo, value, description, type, date};
    }
    
    debit(user, value, type) {
        if(user.saldo < value) {
            throw new Error("Saldo insufiente para saque");
        }
        user.saldo = user.saldo - value;
        const date = today();
        user.statement.push({saldo: user.saldo, value: -value, type, date});
        return {saldo: user.saldo, value:-value, type, date};
    }

}

module.exports = Account;