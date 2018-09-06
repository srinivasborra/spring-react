askobj.case_main = (function (obj) {
	obj.render = render;
	obj.test	= test;
	init();
	return obj;
	function init(){
		askobj.get(['main-config.js'],function(files){
				for(var i in files) eval(files[i]);
				var aa = configs.case_main;
				console.log(aa);
		});
		render();
	}
	function render(){
		console.log("askobj-case_main.render is called");
	}
	
	function test(){
		console.log("test");
	}
})(askobj.case_main || {});