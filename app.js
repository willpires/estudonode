const app = require("./config/serve")
const rotaNoticias = require('./app/routes/noticias')(app)
const rotaHome = require('./app/routes/home')(app)
const rotaFormNoticias = require('./app/routes/form_add_noticia')(app)
app.listen(3000, () => {
  console.log("servico rodando");

});