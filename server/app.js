var express = require('express');
var app = express();

app.use('/', express.static('server/public'));

app.listen(process.env.PORT || 3000, function () {
    console.log('Example app listening on port 3000!');
});