var scrollPos;
var leftPos;
var $wireT;
$(document).ready(function(){
	$(window).bind("scroll",onScroll);
	$wireT=$("#mobile_wireTxt li");
});
function onScroll(){
	scrollPos=$(document).scrollTop();
	if(scrollPos>=1300&&scrollPos<=1500){
		leftPos=1300-scrollPos;
		$("#mobile_wireImg1").css("left",432-leftPos);
		$("#mobile_wireImg2").css("top",490+leftPos);
		$("#mobile_wireImg3").css("left",1144+leftPos);				
	}else if(scrollPos>1500&&scrollPos<=1550){
		leftPos=1500-scrollPos;
		$("#mobile_wireImg1").css("left",632);
		$("#mobile_wireImg2").css("top",290);
		$("#mobile_wireImg3").css("left",944);
		$wireT.eq(0).css({"opacity":1,"top":82-leftPos});
	}else if(scrollPos>1550&&scrollPos<=1600){
		leftPos=1550-scrollPos;
		$wireT.eq(1).css({"opacity":1,"left":424-leftPos});				
	}else if(scrollPos>1600&&scrollPos<=1650){
		leftPos=1600-scrollPos;
		$wireT.eq(2).css({"opacity":1,"left":1097+leftPos});
	}else if(scrollPos>1650&&scrollPos<=1700){
		leftPos=1650-scrollPos;
		$wireT.eq(3).css({"opacity":1,"left":538-leftPos});
	}else if(scrollPos>1700&scrollPos<=1750){
		leftPos=1700-scrollPos;
		$wireT.eq(4).css({"opacity":1,"top":662+leftPos});
	}
}
