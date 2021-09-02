var $close;
$(document).ready(function(){
	$close=$("#notice_close");
	$close.bind("click",noticeClose);
})
function noticeClose(){
	$("#notice").hide();
}
