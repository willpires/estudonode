import dbConnection from "../../config/dbConnection.js"
export default (app) =>{
  const connection = dbConnection()
    app.get('/noticias',(req, res) => {
        connection.query('select * from noticias',(error, result) =>{
          res.render("noticias/noticias",{noticias: result})
        })

    })
}