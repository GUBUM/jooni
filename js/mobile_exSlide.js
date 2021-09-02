var mobile_exMenu;
var mobile_exBg;
var mobile_exImg;
var clickNum;
$(document).ready(function(){
	$mobile_exMenu=$("#mobile_exMenu li");
	$mobile_exBg=$("#mobile_exbg");  //bg초기값
	exbgImg=$mobile_exBg.children().size();
	exbgH=$mobile_exBg.children().height();
	$mobile_exMenu.bind("click",exmenuClick);
	exSlide(0);
})
function exmenuClick(){
	clickNum=$mobile_exMenu.index($(this));	
	exSlide(clickNum);
}
function exSlide(newIndex){	
	$mobile_exMenu.css("color","white");
	$mobile_exMenu.eq(newIndex).css("color","#f07911");
	$mobile_exBg.animate({"top":-exbgH*newIndex},500,"easeOutCubic");
	$("#mobile_exImg ul li").hide();
	$("#mobile_exImg ul li").eq(newIndex).show();
	$("#mobile_exTxt li").hide();
	$("#mobile_exTxt li").eq(newIndex).show();
	$("#mobile_exTxt li").css("top",220);
	$("#mobile_exTxt li").eq(newIndex).animate({"top":0},500,"easeOutCubic");
}
