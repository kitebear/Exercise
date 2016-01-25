//process.nextTick > setTimeout >= setImmediate

//链式结构     在当前event loop执行之后执行
setImmediate(function () {
    console.log("setImmediate");
});

/**
 * 由于
 */
setTimeout(function () {
    console.log("执行Settimeout");
}, 0);

//在当前 event loop 执行之前  作用和setTimeout相同 比setTimeout更高效
process.nextTick(function () {
    console.log("process");
});