const connection = require("../database/connection");

async function deleteUser(rl,main,pause) {
 
    const sqlUsers = /* Cria a query para mostrar os usuários. */
    `SELECT 
     id AS "ID",
     user_name AS "NOME",
     email AS "EMAIL"
    FROM usuarios`;
    
    const [users] = await connection.execute(sqlUsers);

    if (users.length === 0) {  /* Se o user não nenhum usuário mostra a mensagem de nenhum usuário cadastrado.*/
        console.log("Nenhum usuário cadastrado! ❌");
        pause(rl,main);
        return;
    }

    console.table(users); /* Exibe a tabela de usuários. */

    rl.question(`Digite o número do ID que deseja excluir: `, async (idLogin) => {

        const sqlUser =  /* Procura no banco o usuário do ID digitado. */
        `SELECT 
         id,
         user_name,
         email
         FROM usuarios
        WHERE id = ?`;

        const [resultUser] = await connection.execute(sqlUser,[idLogin]); /* Executa a query e retorna as informações do usuário, id, nome e email em forma de objeto. */

        const user = resultUser[0]; /* Pega o primeiro usuário (que seria o primeiro obejeto do array "resultUser".*/

        if (!user) { /* Se o user não existir informa que não existe nenhum usuário com esse ID. */
            console.log("ID não encontrado. ❌");
            pause(rl,main);
            return;            
        }

        const sqlDelete = /* Cria a query para deletar o usuário. */
        `DELETE FROM usuarios
        WHERE id = ?`;

        await connection.execute(sqlDelete, [idLogin]); /* Executa a query alterando o "?" pelo o ID digitado. */

        console.clear();
        console.log("Usuário deletado com sucesso! ✅");

        const [users] = await connection.execute(sqlUsers); /* Exibe a tabela atualizada após a remoção. */
        console.log("\nLista de cadastros atualizada ⬇️");
        console.table(users);
        
        pause(rl,main);

    });
}

module.exports = deleteUser;