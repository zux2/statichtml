$(document).ready(function(){
   $(window).resize(function() {
	   resizeFontSize();
	});
	function resizeFontSize() {
		var deviceWidth = document.documentElement.clientWidth;
		var deviceHeight = document.documentElement.clientHeight;
		var minLenth = deviceWidth;
		if (deviceWidth > deviceHeight) {
			/*alert('亲 竖屏才是正确浏览方式');*/
		}
		document.documentElement.style.fontSize = minLenth / 7.5 + 'px';
	}
	resizeFontSize();
})