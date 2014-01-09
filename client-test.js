
var client = require('./client')

client.sync('ws://vps.dt.in.th:1357', function(error, result) {
  console.log(result)
})
