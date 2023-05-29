// server.js
require("dotenv").config();
const { createServer } = require('http')
const { parse } = require('url')
const next = require('next');
const { redirect } = require("next/dist/server/api-utils");
const dev = process.env.NODE_ENV !== 'production'
const hostname = 'localhost'
const port = process.env.PORT
// when using middleware `hostname` and `port` must be provided below
const app = next({ dev, hostname, port })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  createServer(async (req, res) => {
    try {
      /* Se agregan los comandos recomendados para server en next
      @url: https://nextjs.org/docs/advanced-features/custom-server  */
      const parsedUrl = parse(req.url, true)
      /* if (parsedUrl.pathname !== "/" && !req.url.startsWith("/static") && !req.url.startsWith("/prebid") && !req.url.startsWith("/_next")) {
        if (parsedUrl.query.outputType == "amp") {
          let destPath = parsedUrl.pathname
          if (parsedUrl.pathname.endsWith("/")) {
            destPath = parsedUrl.pathname.slice(0, parsedUrl.pathname.length - 1)
          }
          const destUrl = "/amp" + destPath;
          return redirect(res, 301, destUrl)
        }
        else if (parsedUrl.pathname.endsWith("/")) {
          const destUrl = parsedUrl.pathname.slice(0, parsedUrl.pathname.length - 1)
          return redirect(res, 301, destUrl)
        }

      } */
      await handle(req, res, parsedUrl)

    } catch (err) {
      console.error('Error occurred handling', req.url, err)
      res.statusCode = 500
      res.end('internal server error')
    }
  }).listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready LR on http://${hostname}:${port}`)
  })
})
