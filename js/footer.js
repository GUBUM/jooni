var footerPos;
$(document).ready(function(){
	$(window).bind("scroll",footerScroll);
})
function footerScroll(){
	footerPos=$(document).scrollTop();
	if(footerPos>=0&&footerPos<50){
		$("footer").hide();
	}else if(footerPos>=50){
		$("footer").show();
	}
}