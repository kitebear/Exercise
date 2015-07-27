$(function(){
	function load_script(url,async){
	    var s = document.createElement('script');
	    s.type="text/javascript";
	    s.async = async;
	    s.src=url;
	    document.body.appendChild(s);
	    return s;
	}

	var a=load_script("2.js",false);
	var b=load_script("3.js",false);
	if (document.all) { //如果是IE
	 
            a.onreadystatechange = function () {
 
                    if (js.readyState == 'loaded' || js.readyState == 'complete') {
 
                      alert('IE6、IE7 support js.onreadystatechange');
                  }
           };
      }
 
      else {
 
             a.onload = function () {
 
             	n1();
 
              };
 
    }
});
