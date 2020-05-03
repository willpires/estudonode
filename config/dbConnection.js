import mysql from "mysql"

export default () =>{
   return mysql.createConnection({
        host:'localhost',
        user:'root',
        password:'william1991',
        database:'portal',
     })

}

