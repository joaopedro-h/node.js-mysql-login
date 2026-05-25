const connection = require("../database/connection");
const bcrypt = require('bcrypt');

async function login(rl,main,pause) {
    
    console.clear();
    rl.question(`📩 - Insira o email: `, async (emailEntered) => {

        rl.question(`🔑 - Insira a senha: `, async (passwordEntered) => {

            const sqlLogin =  /* Faz a busca no banco de dados do usuário com o email digitado. */
            `SELECT 
                user_name,
                email,
                password
            FROM usuarios
            WHERE email = ?`;

            const [resultUser] = await connection.execute(sqlLogin, [emailEntered]); /* Executa a query e substitui o "?" pelo "emailEntered". */
            /* "resultUser" é o array contendo os dados do usuário, nome, email e senha em forma de objeto. */

            if (resultUser.length === 0) { /* Se não for encontrado nenhum usuário o array fica vazio, mostra que não existe usuário. */
                console.log("Usuário não encontrado! ❌");
                pause(rl,main);
                return;
            }

            const user = resultUser[0]; /* As informações do usuário são passadas para a variável "user". */

            const correctPassword =  await bcrypt.compare(passwordEntered,user.password ); /* É feito a comparação comparação da senha digitada com a senha do usuário no banco de dados. */
            /*A comparação retorna "true" ou "false". */

            if (correctPassword) { /* Se "correctPassword" for true é executado o login com sucesso, caso contrário é mostrado senha incorreta. */
                console.log("Logado com sucesso! ✅");
                
            }else{
                console.log("Senha incorreta! 🚫");    
            }

            pause(rl,main);

        });
    });

}

module.exports = login;