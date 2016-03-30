var express = require('express');
var router = express.Router();
var path = require('path')
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/download1',function(req,res,next){
  //try{
  //  res.writeHead(200, {"content-type":''});
  //  res.download(path.resolve('public/file/background-3.png'),new Date().getTime()+'')
  //}catch (err){
  //  console.log(err)
  //}

  var filepath = path.resolve('public/file/background-3.png')
  var rx = filepath.match(/([\w-]+)\.([\w]+)/)
  console.log(rx)
  var fileName = rx[1]
  var fileType = rx[2]

  console.log(fs.statSync(filepath))
  var pdf = fs.createReadStream(filepath)

  res.writeHead(200, {
    'Content-Type': 'application/force-download',
    'Content-Disposition': 'attachment; filename='+fileName+new Date().getTime()+'.'+fileType
  });

  pdf.pipe(res);
})

module.exports = router;
