const User = require("../models/User");
const {saveData} = require("./saveData");

async function registerUser(rl,main,pause) {
    
    console.clear();
    rl.question(`Insira o seu nome: `, (userName) => {

        rl.question(`Insira seu email: `, async (email) => {

            rl.question(`Insira sua senha: `, async (password) => {

                const user = new User (
                    userName,
                    email,
                    password
                );

                await saveData(user,rl,main,pause);

                rl.close;

            });
        });
    });
}

module.exports = registerUser;