const connection = require("../database/connection");

async function saveData(user,rl,main,pause) {
    
    const sqlSave = 
    `INSERT INTO usuarios(user_name, email, password)
     VALUES (?,?,?)
    `;

    const values = [
        user.name,
        user.email,
        user.password
    ];

    const [result] = await connection.execute(sqlSave, values);

    console.log("Cadastro criado com sucesso!");
    console.log("ID", result.insertId);
    
    pause(rl,main);
}

module.exports = {saveData};