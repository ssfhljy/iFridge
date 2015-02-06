		// $("input").on("click", function() {
		// 	//alert($(this).text());
		// });

$(document).ready(function(){
	//alert("ready");
	$("input").hide();
	$(".glyphicon-camera").click(function(e){
		e.preventDefault();
		$("#cameraInput").click();
	});

	$(".cb").click(function(){
		$(this).hide();
	});

});