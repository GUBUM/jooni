var $codeMenu;
var timer;
var clickNum=0;
$(document).ready(function(){
	$codeMenu=$("#code_list li");
	$codeMenu.bind("click",codeClick);
	$codeOver=$("#code_list,#code_txt,#code_r");
	$codeOver.bind("mouseover",codeOver);
	$codeOver.bind("mouseout",codeOut);
	codeNum=$codeMenu.size();
	code(0);
	onPlay();
})
function codeClick(){
	clickNum=$codeMenu.index($(this));
	code(clickNum);
}
function code(newIndex){
	$codeMenu.css("color","#b1b0b0");
	$(".box").css({"border-color":"#b1b0b0","background":"none"});
	$codeMenu.eq(newIndex).css("color","#f6d258");
	$codeMenu.eq(newIndex).children().css({"border-color":"#f6d258","background":"#f6d258"});
	$("#code_txt img").attr("src","/jooni/img/web_codtxt0"+(newIndex+1)+".jpg");
	$("#code_r img").attr("src","/jooni/img/web_codimg0"+(newIndex+1)+".jpg");
}
//웹 슬라이드
function onPlay(){
	timer=setInterval(onCount,2000);
}
function onCount(){
	clickNum+=1;
	if(clickNum>=codeNum){
		clickNum=0;
	}
	code(clickNum);
}
function codeOver(){
	clearInterval(timer);
}
function codeOut(){
	onPlay();
}

