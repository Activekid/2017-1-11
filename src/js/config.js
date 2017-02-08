requirejs.config({
	baseUrl:'js',
    paths : {
    	// 别名
        "jquery": "../assets/jquery-3.1.1",
        //"a":'moduleA'
    },
    shim:{
    	"jquery.gdscarousel":{
    		exports:'jQuery.fn.gdscarousel'
    	}
    }
});
