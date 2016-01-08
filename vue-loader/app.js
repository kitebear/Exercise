var path,logger,express,favicon,bodyParser,session,cookieParser,request,webpack,app,webpackConfig,compiler,idmencode;

var API_ENDPOINT;

//初始化包
path = require('path');
logger = require('morgan');
express = require('express');
app = express();
favicon = require('serve-favicon');
bodyParser = require('body-parser');
session = require("express-session");
cookieParser = require('cookie-parser');
request = require("request");
webpack = require('webpack');
webpackConfig = require('./webpack.config.js');
compiler = webpack(webpackConfig);
idmencode = require("./idmencode");

// 调用工具
app.use(logger('dev'));
app.use(session( { secret : 'admin_console', cookie : { maxAge : 60000*60 } } ));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'dist')));

API_ENDPOINT = process.env['API_ENDPOINT'] || "http://api.12301.so";

/**
 * 加载自动化工具
 */
if (app.get('env') === 'development') {
  compiler.watch({
    aggregateTimeout: 300, // wait so long for more changes
    poll: true // use polling instead of native watchers
  }, function (err, stats) {
    if (err)
      return console.log(err);
    var jsonStats = stats.toJson();
    if (jsonStats.errors.length > 0)
      return console.log(jsonStats.errors);
    if (jsonStats.warnings.length > 0)
      console.log(jsonStats.warnings);

    console.log("webpack compiled.")
  });

  app.use('/',function(req,res,next){
    var url = req.originalUrl;
    if(url==='/'||url===''){
      res.redirect('/indexv.html');
    }else{
      next();
    }
  });
}

app.get('/*', function(req, res, next) {
  var sess = req.session;
  if ((sess.sid==undefined || sess.sid==null || sess.sid=="")&& req.url != "/login.html") { // 未登录
    res.redirect('/login.html');
  } else {
    next();
  }
});

app.get('/getUser',function(req,res,next){
  var user = req.session.user;
  res.send(user);
});

app.post('/login', function(req, res, next) {
  var sess = req.session;
  var loginName = req.body.username;
  var password = req.body.password;
  try {
    request({
      method : "post",
      uri : "http://10.10.186.152/rest/www/authenticate_to_redis",
      body : {
        "username" : loginName,
        "password" : password
      },
      headers : idmencode.encodeKey(),
      json : true
    }, function(error, resp, body) {
      if (error)
        console.log("error" + error);
      if (resp) {
        var resultCode = body.resultCode;
        if (resultCode=="1") {
          var username = body.username;
          var parttimeOrg = body.wwwParttimeOrgs;
          var wwwMgtAuthority = body.wwwMgtAuthority;
          var wwwMdlAuthority = body.wwwMdlAuthority;
          var wwwMgtType = body.wwwMgtType;
          // 登录成功
          var sid = body.sid;
          sess['sid'] = sid;
          req.session.user = {
            sid:sid,
            password:password,
            username:username,
            parttimeOrg:parttimeOrg,
            wwwMgtAuthority:wwwMgtAuthority,
            wwwMdlAuthority:wwwMdlAuthority,
            wwwMgtType:wwwMgtType,
          };
          res.redirect('/indexv.html');
        } else {
          res.redirect('/login.html');
        }
      }
      else {
        res.redirect('/login.html');
      }
      next();
    });
  } catch (e) {
    console.log("exception = " + e);
  }
});

app.use("/v1/*" , function(req,res,next) {
  request({
    method: req.method,
    uri: API_ENDPOINT + req.originalUrl,
    body: req.body,
    json: true
  }, function (error, resp, body) {
    //res.status(resp.statusCode).send(body)
    if (error)
      console.log("error" + error);
    if (resp) {
      res.statusCode = resp.statusCode;
      res.json(body)
    }
  })
})

// 设置转发请求映射
app.use("/rest/*", function(req, res, next) {
  request({
    method : req.method,
    uri : "http://10.10.186.152" + req.originalUrl,
    body : req.body,
    headers : idmencode.encodeKey(),
    json : true
  }, function(error, resp, body) {
    // res.status(resp.statusCode).send(body)
    if (error)
      console.log("error" + error);
    if (resp) {
      //console.log(JSON.stringify(resp))
      res.statusCode = resp.statusCode;
      res.json(body)
    }
  })
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// development error handler
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message : err.message,
      error : err
    });
  });
}

// production error handler
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.end(err.message)
});

module.exports = app;
