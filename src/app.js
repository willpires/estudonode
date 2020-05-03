import app from "../config/serve.js"
import rotasNoticias from "./routes/noticias.js"
import rotasFormulario from "./routes/formulario_inclusao_noticia.js"
import rotasHome from "./routes/home.js"
rotasNoticias(app)
rotasFormulario(app)
rotasHome(app)
app.listen(3000)