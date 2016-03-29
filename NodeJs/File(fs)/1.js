var fs = require('fs')

fs.readFile('1.text', 'utf-8', function (err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});