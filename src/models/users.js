const dbPool = require('../config/database');

const getAllUsers = (req,res)=>{
    const sqlQuery = 'SELECT * from new_users';
   
    return dbPool.execute(sqlQuery);

}

const createNewUser = (body)=>{
    const sqlQuery = `INSERT INTO new_users (name,email,address) VALUES ('${body.name}','${body.email}','${body.address}')`
    return dbPool.execute(sqlQuery);
}
const updateUser = (body, idUser)=>{
    const sqlQuery = `UPDATE new_users SET name='${body.name}',email='${body.email}',address='${body.address}' where id = ${idUser}`;
return dbPool.execute(sqlQuery);
}

const deleteUser = (idUser)=>{
    const sqlQuery = `DELETE FROM new_users WHERE id = ${idUser}`;
    return dbPool.execute(sqlQuery);
}
module.exports = {getAllUsers,createNewUser,updateUser,deleteUser}