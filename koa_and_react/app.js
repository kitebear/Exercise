import Koa from 'koa'

const path = require('path')

const PATH = __dirname + "/" || path.join("./");

const app           = new Koa();

const logger        = require('koa-logger');;
const bodyParser    = require('koa-bodyparser');
const router        = require(PATH + 'routes/index.js');

// 中间件
if(!process.env.TYPE){
    app.use(logger());
}

app.use(bodyParser());

// 响应
app.use(router.routes()).use(router.allowedMethods());

// 错误
app.on('error', function(err, ctx){
    log.error('server error', err, ctx);
});

// 监听3000
app.listen(3000,err => {
    if (err)
        throw err

    console.log('this example listening on port 3000')
});

export default app