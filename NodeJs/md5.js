console.log(process.argv[2]);

const filename = process.argv[2];
const crypto = require('crypto');
const fs = require('fs');

const hash = crypto.createHash('md5');

const input = fs.createReadStream(filename);
input.on('readable', () => {
    var data = input.read();
    if (data)
        hash.update(data);
    else {
        console.log(`${hash.digest('hex')} ${filename}`);
    }
});