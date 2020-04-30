
let http = require('http')

http.createServer((req, res) => {
    let categoria = req.url
    if (categoria == "/tecnologia") {
        return res.end("<html><body>Portal de tecnologia</body></html>")
    } else {
        return res.end("<html><body>Portal de moda</body></html>")

    }
    res.end("<html><body>Portal de noticias</body></html>")
}).listen(3000)