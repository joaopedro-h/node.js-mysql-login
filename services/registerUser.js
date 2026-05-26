const User = require("../models/User");
const {saveData} = require("./saveData");
const bcrypt = require('bcrypt');

async function registerUser(rl,main,pause) {
    
    const saltRounds = 10;

    console.clear();
    rl.question(`👤 - Insira o seu nome: `, (userName) => {     /* Usuário insere as informações do cadastrado. */

        rl.question(`📩 - Insira seu email: `, async (email) => {

            rl.question(`🔑 - Insira sua senha: `, async (password) => {

                const hashPassword = await bcrypt.hash(password, saltRounds); /*bcrypt.hash realiza a criptografia da senha e armazena em "hashPassword". */

                const user = new User ( /* É criado um user contendo o nome inserido, email e a senha (já criptografada). */
                    userName,
                    email,
                    hashPassword
                );

                await saveData(user,rl,main,pause); /* É chamado a função de salvar os dados, já passando como parâmetro o "user". */

            });
        });
    });
}

module.exports = registerUser;