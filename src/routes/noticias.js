import mysql from "mysql"

export default (app) =>{
    app.get('/noticias',(req, res) => {
      const connection =  mysql.createConnection({
            host:'localhost',
            user:'root',
            password:'william1991',
            database:'portal',
         })
        
        connection.query('select * from noticias',(error, result) =>{
          res.render("noticias/noticias",{noticias: result})
        })
    })
}