"use strict";

(function(){
    var xdh={

    };

    //单例模式
    xdh.getSingle = function(fn){
        var result;
        return function(){
            result || (result = fn.call(this,arguments));
        }
    };

    //扩展
    Function.prototype.before = function(beforefn){
        var _self = this;
        return function(){
            beforefn.apply(this,arguments);
            return _self.apply(this,arguments);
        };
    };

    Function.prototype.after = function(afterfn){
        var _self = this;
        return function(){
            var ret = _self.apply(this,arguments);
            afterfn.apply(this,arguments);
            return ret;
        }
    };

    window.xdh = xdh;
})();