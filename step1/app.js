var https = require('https');


function getAndPrintHTMLChunks () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  https.get(requestOptions, function (res) {

    res.setEncoding('utf8');

    res.on('data', function (data) {
      console.log(data.toString());
    });

    res.on('end', function() {
      console.log('Response stream complete.');
    });

  });

}


getAndPrintHTMLChunks();