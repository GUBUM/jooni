var $porMenu;
$(document).ready(function(){
	$porMenu=$("#por_list li span img");
	$porMenu.bind("mouseover",porOver);
	$porMenu.bind("mouseout",porOut);
})
function porOver(){
	overNum=$porMenu.index($(this));
	$(this).attr("src","/jooni/img/web_porover0"+(overNum+1)+".jpg");
}
function porOut(){
	overNum=$porMenu.index($(this));
	$(this).attr("src","/jooni/img/web_por0"+(overNum+1)+".jpg");
}