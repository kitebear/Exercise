const router    =       require('koa-router')();

router.get("/",function *(next) {
    console.log(1);
    this.body = "你好啊";
});

router.get("/user/:id",async (ctx) => {
    console.log(ctx);
    ctx.body = 'Hello World'
});

module.exports = router;