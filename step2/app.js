var https = require('https');

function getAndPrintHTML () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  let buffer = '';

  https.get(requestOptions, function (res) {

    res.setEncoding('utf8');

    res.on('data', function (data) {
      buffer += data.toString();
    });

    res.on('end', function() {
      console.log('Response stream complete.');
      console.log(buffer);
    });

  });

}

getAndPrintHTML();