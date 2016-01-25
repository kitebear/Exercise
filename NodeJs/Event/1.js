const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

//const myEmitter = new MyEmitter();

///**
// * 定义
// */
//myEmitter.on('event', function() {
//    console.log('an event occurred!');
//});
//
///**
// * 触发
// */
//myEmitter.emit('event');

const myEmitter = new MyEmitter();
myEmitter.on('event', (a, b) => {
    console.log(a, b, this);
    // Prints: a b {}
});
myEmitter.emit('event', 'a', 'b');