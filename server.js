var WebSocketServer = require('ws').Server
  , port = (+process.env.PORT) || 1357
  , wss = new WebSocketServer({port: port})
wss.on('connection', function(ws) {
  var count = 0
  ws.on('error', function(e) {
    console.error(e)
  })
  ws.on('message', function(message) {
    message = String(message)
    if (message.length <= 20) {
      ws.send(message + ',' + new Date().getTime())
      count += 1
      if (count == 8) {
        ws.send('x')
        ws.close()
      }
    } else {
      ws.send('e')
      ws.close()
    }
  })
  ws.send('k')
})
console.log('Yo!! We are listening on port', port)
