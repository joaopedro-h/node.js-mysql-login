const connection = require("../database/connection");

async function saveData(user,rl,main,pause) {
    
    const sqlSave =  /* Query SQL responsável por inserir um novo usuário na tabela usuários. */
    `INSERT INTO usuarios(user_name, email, password)
     VALUES (?,?,?) 
    `;

    const values = [ /* values irá receber o nome, email e senha digitadas pelo o usuário. */
        user.name,
        user.email,         /*user foi foi passado como parâmetro pela função "registerUser" */
        user.password
    ];

    /* result recebe o primeiro retorno do execute(), contendo informações da operação SQL.*/
    const [result] = await connection.execute(sqlSave, values); /* Executa a query SQL e substitui os "?" pelos valores do array values. */

    console.log("Cadastro criado com sucesso! ✅");
    console.log("🆔 =", result.insertId);
    
    pause(rl,main);
}

module.exports = {saveData};