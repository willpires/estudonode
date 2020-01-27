const http = require("http");
const serve = http.createServer((req, res) => {
  var categoria = req.url;
  if (categoria == "/tec") {
    res.end("<html><body>tecnologia aaaaaa</body></html>");
  } else {
    res.end("<html><body>portal de noticiasasa</body></html>");
  }
});
serve.listen(3000);
