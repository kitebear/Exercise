var fs = require('fs')

//
//fs.readFile('1.text', 'utf-8', function (err, data) {
//    if (err) {
//        console.log(err);
//    } else {
//        console.log(data);
//    }
//});

//读取一个文件
//fs.readFile('background-3.png', function (err, data) {
//    if (err) {
//        console.log(err);
//    } else {
//        console.log(data);
//        console.log(data.length + ' bytes');
//    }
//});

//同步读取对象
//try {
//    var data = fs.readFileSync('1.text', 'utf-8');
//    console.log(data);
//} catch (err) {
//    // 出错了\
//    console.log(err)
//}

//写入文件
//var data = 'Hello, Node.js';
//fs.writeFile('1.text', data, function (err) {
//    if (err) {
//        console.log(err);
//    } else {
//        console.log('ok.');
//    }
//});

//同步写入文件
//var data = 'Hello,1 Node.js';
//fs.writeFileSync('1.text', data);

//获取文件状态
//fs.stat('a', function (err, stat) {
//    if (err) {
//        console.log(err);
//    } else {
//        // 是否是文件:
//        console.log('isFile: ' + stat.isFile());
//        // 是否是目录:
//        console.log('isDirectory: ' + stat.isDirectory());
//        console.log(stat)
//        if (stat.isFile()) {
//            // 文件大小:
//            console.log('size: ' + stat.size);
//            // 创建时间, Date对象:
//            console.log('birth time: ' + stat.birthtime);
//            // 修改时间, Date对象:
//            console.log('modified time: ' + stat.mtime);
//        }
//    }
//});

//读取目录
//var files = fs.readdirSync('a');
//console.log(files.constructor == Array)

//创建一个读取流
//var rs = fs.createReadStream('1.text', 'utf-8');
//
//rs.on('data', function (chunk) {
//    console.log('DATA:')
//    console.log(chunk);
//});
//
//rs.on('end', function () {
//    console.log('END');
//});
//
//rs.on('error', function (err) {
//    console.log('ERROR: ' + err);
//});

//创建一个写入流
//var ws1 = fs.createWriteStream('output1.txt', 'utf-8');
//ws1.write('使用Stream写入文本数据...\n');
//ws1.write('END.');
//ws1.end();
//
//var ws2 = fs.createWriteStream('output2.txt');
//ws2.write(new Buffer('使用Stream写入二进制数据...\n', 'utf-8'));
//ws2.write(new Buffer('END.', 'utf-8'));
//ws2.end();

var rs  = fs.createReadStream('output1.txt')
var ws = fs.createWriteStream('output2.txt')

console.log(rs.pipe(ws))