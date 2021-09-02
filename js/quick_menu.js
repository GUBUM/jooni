var $qMenu;
var $menuBtn;
var isOpen=true;
$(document).ready(function(){
	$qMenu=$("#quick_menu")
	$menuBtn=$("#menu_icon");
	$menuBtn.bind("click",menuClick);	
});
function menuClick(){
	$(this).toggleClass("open");
	if(isOpen==false){
		$qMenu.animate({"right":0},300,"easeOutCubic");	
		isOpen=true;
	}else{
		$qMenu.animate({"right":-230},300,"easeOutCubic");
		isOpen=false;
	}
	
}
