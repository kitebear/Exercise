// 单例模式
var Singleton = function (name) {
    this.name = name;
};

Singleton.prototype.getName = function () {
    return this.name;
};

Singleton.getInstance = (function(){
    var instance = null;
    return function(name){
        if(!instance){
            instance = new Singleton(name);
        }
        return instance;
    }
})();

var siginle1 = Singleton.getInstance("1");
var siginle2 = Singleton.getInstance("2");

//console.log(siginle1===siginle2);

//透明的单例

//var CreateDiv = (function(){
//    var instance;
//
//    var CreateDiv = function(html){
//        if(instance){
//            return instance;
//        }
//        this.html = html;
//        this.init();
//        return instance = this;
//    };
//
//    CreateDiv.prototype.init = function(){
//        //console.log(1);
//    };
//
//    return CreateDiv;
//
//})();

//var a = new CreateDiv("1");
//var b = new CreateDiv("2");

//console.log(a===b);

var CreateDiv = function(html){
    if(instance){
        return instance;
    }
    this.html = html;
    this.init();
    return instance = this;
};

var CreateDiv = function(html){
    this.html = html;
    this.init();
};

CreateDiv.prototype.init = function(){
    //content
};

var ProxySingletonCreateDiv = (function(){
    var instance;
    return function(html){
        if(!instance){
            instance = new CreateDiv(html);
        }
        return instance;
    }
})();

var a = new ProxySingletonCreateDiv("1");
var b = new ProxySingletonCreateDiv("2");

//console.log(a===b);

var getSingle = function(fn){
    var result;
    return function(){
        return result || (result = fn.apply(this,arguments));
    };
};

var a1 = getSingle(function(){
    //content
    return "da";
});

var a2 = getSingle(function(){
    return "adsadas";
});

console.log(a1());
console.log(a2());
console.log(a1());