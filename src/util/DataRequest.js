var $ = require('jquery')

function executeHttp (verb, url, resToken) {
  // var tokenPath = 'http://52.14.168.26:8081/api/security/login'
  var dataAPI = 'http://52.14.168.26:8081/api/client/city?area=boulder&report=master'

  var settings = {
    'url': dataAPI,
    beforeSend: function (req) {
      req.setRequestHeader('cache-control', 'no-cache')
      req.setRequestHeader('authorization', resToken)
      req.setRequestHeader('Content-Type', 'xml')
      req.setRequestHeader('accept', 'text/json')
    },
    'method': verb,
    success: function (data, textStatus, xhr) {
      console.log(data)
      return data
    },
    error: function (a, b, c) {
      console.log(a, b, c)
    }
  }
  return $.ajax(settings)
}

module.exports = {
  APIpost: function (url, resToken, data) {
    return executeHttp('POST', url, resToken, data)
  },

  APIget: function (url, resToken, data) {
    return executeHttp('GET', url, resToken)
  },

  APIput: function (url, resToken, data) {
    return executeHttp('PUT', url, resToken, data)
  },

  APIdelete: function (url, resToken, data) {
    return executeHttp('DELETE', url, resToken, data)
  },

  goodbar: function (response) {
    // goober = apiCall.APIget(dataAPI, response, '').then( value => {
    console.log(response) // Success!
    // return value;
    // }, function(reason) {
    //   // console.log(reason); // Error!
    // }
    // console.log("Aaaaaah"+ goober)
    // return goober
  },

  APItoken: function (url, user, pwd, role) {
    var settings = {
      'async': true,
      'crossDomain': true,
      'url': url,
      'method': 'POST',
      beforeSend: function (req) {
        req.setRequestHeader('Content-Type', 'application/json')
      },
      'data': '{"name" : "' + user + '", "password" : "' + pwd + '", "role" : "' + role + '"}'
    }
    return $.ajax(settings)
  }
}
