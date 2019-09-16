const http = require('http')

const port     = 8000
const hostname = '0.0.0.0';


http.createServer((req, res) => {})
    .listen(port, hostname, () => console.info(`listening on http://${hostname}:${port}`))