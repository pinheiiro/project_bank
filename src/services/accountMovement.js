class Account {

    credit(user, value, description, type) {
        user.saldo = user.saldo + value;
        const today = new Date();
        const date = {
            hora: `${today.getHours()}:${today.getMinutes()}`, 
            day: `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`
        };
        user.statement.push({saldo: user.saldo, value, description, type, date});
        return {saldo: user.saldo, value, description, type, date};
    }

}

module.exports = Account;