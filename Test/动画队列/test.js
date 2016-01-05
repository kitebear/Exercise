let aa = "hahaha";

/**
 * 设置CSS
 * @param data
 * @param value
 * @returns {css}
 * css("color","blue")
 * dc1.css({ "background-color": "#A9A9A9", "color": "#AB59A9" })
 */
const css = function(data, value) {
    "use strict";
    if (!data) {
        return this;
    }
    if (arguments.length >= 2) {
        this.style[options] = value;
        return this;
    }
    for (var e in data) {
        this.style[e] = data[e];
    }
    return this;
};

const animate = function(options) {
    "use strict";
    requestAnimationFrame(() => {
        window.setTimeout(callback,1000/60);
    });
};

HTMLDivElement.prototype.css = css;
HTMLDivElement.prototype.animate = animate;

console.log(dc1.css({ "background-color": "#A9A9A9", "color": "#AB59A9" }));

dc1.animate({
    left: "50"
},3000,function(){
    "use strict";
    console.log("动画执行完成");
});

animate(function(){
    "use strict";

});
//# sourceMappingURL=1.js.map