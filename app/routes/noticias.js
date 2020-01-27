module.exports = function(app) {
  const mysql = require("mysql");

  app.get("/noticias", function(req, res) {
    const connection = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "w1234567",
      database: "teste"
    });
    connection.query("select * from noticias", function(erro, result) {
      res.send(result);
      console.log(result);
      console.log(erro);
    });

    //res.render("noticias/noticias");
  });
};
