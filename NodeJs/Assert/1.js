const assert = require('assert');

assert(true);

assert(1);

//assert(0);

//assert(false);

//assert(false,'it\'s false');

/**
 * deepEqual 表示是否相等
 * @type {{a: {b: number}}}
 */
//assert.deepEqual(1,1);

//assert.deepEqual(1,2);

//assert.deepEqual(Error('a'),Error('b'));

//const obj1 = {
//    a : {
//        b : 1
//    }
//};
//const obj2 = {
//    a : {
//        b : 2
//    }
//};
//const obj3 = {
//    a : {
//        b : 1
//    }
//};
//
//const obj4 = Object.create(obj1);

//assert.deepEqual(obj1, obj1);

//assert.deepEqual(obj1, obj2);

//assert.deepEqual(obj1, obj3);

/**
 * 更原型没关系
 */
//assert.deepEqual(obj1, obj4);

//assert.deepEqual({a:1});

//assert.deepEqual({a:1}, {a:'1'});

/**
 * 三等号 ===  严格模式
 */
//assert.deepStrictEqual({a:1}, {a:'1'});

//assert.doesNotThrow(
//    function() {
//        throw new TypeError('Wrong value');
//    },
//    SyntaxError
//);

//assert.doesNotThrow(
//    function() {
//        throw new TypeError('Wrong value');
//    }
//);

//assert.doesNotThrow(
//    function() {
//        throw new TypeError('Wrong value');
//    },
//    TypeError,
//    'dasdasdsa',
//    'Whoops'
//);

/**
 *  ==
 */
//assert.equal(1,1);

//assert.equal(1,'1');

//assert.equal(1,2);

//assert.equal({a: {b: 1}}, {a: {b: 1}});

//assert.fail(1, 2, undefined, '>');

//assert.fail(1, 2, '1大于2', '>');

//assert.ifError(0); // OK

//assert.ifError(1); // Throws 1

//assert.ifError('error') // Throws 'error'

//assert.ifError(new Error()); // Throws Error

//assert.notDeepEqual({a:1}, {a:1});
//{ a: 1 } notDeepEqual { a: 1 }

//assert.notDeepEqual({a:1}, {a:2});
//OK

//assert.notDeepEqual({a:1}, {a:'1'});
// AssertionError: { a: 1 } notDeepEqual { a: '1' }

//assert.notDeepStrictEqual({a:1}, {a:'1'});
// OK


//assert.notEqual(1, 2);
// OK

//assert.notEqual(1, 1);
// AssertionError: 1 != 1

//assert.notEqual(1, '1');
// AssertionError: 1 != '1'

//assert.notStrictEqual(1,'1');
//ok

//assert.strictEqual(1,'1');
//AssertionError: 1 === '1'

//assert.throws(
//    function() {
//        throw new Error('Wrong value');
//    },
//    Error
//);

//assert.throws(
//    function() {
//        throw new Error('Wrong value');
//    },
//    /value/
//);

assert.throws(
    function() {
        throw new Error('Wrong value');
    },
    function(err) {
        if ( (err instanceof Error) && /value/.test(err) ) {
            return true;
        }
    },
    'unexpected error'
);