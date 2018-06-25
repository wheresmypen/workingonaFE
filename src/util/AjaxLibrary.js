var $ = require('jquery')

module.exports = {
  Get: function () {
    $.ajax({
      method: 'POST',
      url: 'http://52.14.168.26:8081/api/security/login',
      headers: {
        'Content-Type': 'application/json',
        'cache-control': 'no-cache'
      },
      data: '{"name": "user", "password": "clave", "role": "client"}'
    }).done(function (data, status, response) {
      console.log(response.getResponseHeaders())
    })
  }
}
