var https = require('https');

function getHTML (options, callback) {

  let buffer = '';

  https.get(options, function (res) {

    res.setEncoding('utf8');

    res.on('data', function (data) {
      buffer += data.toString();
    });

    res.on('end', function() {
      console.log('Response stream complete.');
      callback(buffer);
    });

  });

}

function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getHTML(requestOptions, printHTML);