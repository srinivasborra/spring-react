askobj.main=(function(obj){
	obj.render			= render;
	
	setTimeout(function () { init(); askobj.load('case_main', 'case-main.js'); }, 100);
	return obj;
	function init() {
		console.log("YES");
		render();
	}
	function render(){
		console.log("askobj-main.render is called");
	}
})(askobj.main||{});