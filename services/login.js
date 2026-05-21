const connection = require("../database/connection");
const bcrypt = require('bcrypt');

async function login(rl,main,pause) {
    
    console.clear();
    rl.question(`📩 - Insira o email: `, async (emailEntered) => {

        rl.question(`🔑 - Insira a senha: `, async (passwordEntered) => {

            const sqlLogin = 
            `SELECT
                user_name,
                email,
                password
            FROM usuarios
            WHERE email = ?`;

            const [rows] = await connection.execute(sqlLogin, [emailEntered]);

            if (rows.length === 0) {
                console.log("Usuário não encontrado! ❌");
                
                pause(rl,main);
                return;
            }

            const user = rows[0];

            const correctPassword =  await bcrypt.compare(passwordEntered,user.password );

            if (correctPassword) {
                console.log("Logado com sucesso! ✅");
                
            }else{
                console.log("Senha incorreta! 🚫");    
            }

            pause(rl,main);


        });
    });

}

module.exports = login;