const User = require("../models/User");
const {saveData} = require("./saveData");
const bcrypt = require('bcrypt');

async function registerUser(rl,main,pause) {
    
    const saltRounds = 10;

    console.clear();
    rl.question(`👤 - Insira o seu nome: `, (userName) => {

        rl.question(`📩 - Insira seu email: `, async (email) => {

            rl.question(`🔑 - Insira sua senha: `, async (password) => {

                const hashPassword = await bcrypt.hash(password, saltRounds);

                const user = new User (
                    userName,
                    email,
                    hashPassword
                );

                await saveData(user,rl,main,pause);

            });
        });
    });
}

module.exports = registerUser;