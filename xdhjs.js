~function () {
    // 类型判断
    function isType(type) {
        return function (o) {
            return Object.prototype.toString.call(o) === '[object ' + type + ']';
        }
    }
}();