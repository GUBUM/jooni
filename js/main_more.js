var $moreBg;
var $more;
var $about;
var $contents;
$(document).ready(function(){
	$moreBg=$("#moreBg");
	$more=$("#more");
	$about=$("#main_aboutme");
	$contents=$("#contents")
	$more.bind("mouseover",bgOver);
	$more.bind("mouseleave",bgOut);
	$more.bind("click",aboutUp);
	$("#moreD").bind("click",aboutDown);
})
function bgOver(){
	$moreBg.addClass("up");
	$more.css("color","white");
	$moreBg.next().attr("src","/jooni/img/main_arr.png");
}
function bgOut(){
	$moreBg.removeClass("up");
	$more.css("color","#006AC6");
	$moreBg.next().attr("src","/jooni/img/about_arr.png");
}
function aboutUp(){
	$contents.hide();
	$about.show();
	$(window).scrollTop(0);
	$about.animate({"top":0},1200,"easeOutQuint");	
}
function aboutDown(){	
	$about.animate({"top":$(window).height()},500,"easeOutQuint",function(){
		$contents.show();
		$(window).scrollTop(2300);
		$about.hide();
	})
}
