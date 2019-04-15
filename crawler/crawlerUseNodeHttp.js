var express = require('express');

const https = require('https');

var app = express();

app.get('/', function (req, res, next) {
    https.get('https://cnodejs.org/', (res) => {
        res.on('data', (d) => {
            process.stdout.write(d);
        });
    })
});


app.listen(3000, function () {
    console.log('app is listening at port 3000');
});