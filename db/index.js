//House connection to the database 

const pgp=require('pg-promise')();
const connectionString="postgresql://postgres:8146@localhost:5433/userdetail-01"
    const db=pgp(connectionString)

module.exports=db;