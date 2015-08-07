//不用代理模式
//var Flower = function(){};
//
//var xiaoming = {
//    sendFlower: function(target){
//        var flower = new Flower();
//        target.receiveFlower(flower);
//    }
//};
//
//var A = {
//    receiveFlower : function(flower){
//        console.log("收到");
//    }
//};
//
//xiaoming.sendFlower(A);
/*
 * 代理模式 实现
 * 把送花的过程转交给B来完成
 */
//var Flower = function(){};
//
//var xiaoming = {
//    sendFlower : function(target){
//        var flower = new Flower();
//        target.receiveFlower(flower);
//    }
//};
//
//var B = {
//    receiveFlower:function(flower){
//        A.receiveFlower(flower);
//    }
//};
//
//var A = {
//    receiveFlower:function(flower){
//        console.log("收到");
//    }
//};
//
//xiaoming.sendFlower(B);

//保护代理
//var Flower = function(){};
//
//var xiaoming = {
//    sendFlower : function(target){
//        //var flower = new Flower();
//        target.receiveFlower();
//    }
//};
//
//var B = {
//    receiveFlower:function(){
//        A.listenGoodMood(function(){
//            var flower = new Flower();
//            A.receiveFlower(flower);
//        });
//    }
//};
//
//var A = {
//    receiveFlower:function(flower){
//        console.log("收到");
//    },
//    listenGoodMood: function(fn){
//        setTimeout(function(){
//            fn();
//        },10000);
//    }
//};     
//
//xiaoming.sendFlower(B);

//代理

//var myImage = (function(){
//    var imgNode = document.createElement('img');
//    document.body.appendChild(imgNode);
//
//    return {
//        setSrc: function(src){
//            imgNode.src = src;
//        }
//    }
//})();
//
//var proxyImage = (function(){
//    var img = new Image();
//    img.onload = function(){
//        myImage.setSrc(this.src);
//    };
//    return {
//        setSrc: function(src){
//            myImage.setSrc("loading.gif");
//            img.src = src;
//        }
//    }
//})();