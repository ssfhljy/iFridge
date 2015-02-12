		// $("input").on("click", function() {
		// 	//alert($(this).text());
		// });

$(document).ready(function(){
	//alert("ready");

	$("#cameraInput").hide();
	$("#searchBar").hide();
	$("#cancel").hide();
	$(".glyphicon-camera").click(function(e){
		e.preventDefault();
		$("#cameraInput").click();
	});

	$(".cb").click(function(){
		$(this).hide();
	});

});


$(document).ready(function(){
	$(".glyphicon-search").click(function(e){
		e.preventDefault();
		// $("#searchBar").toggle();
		$("#searchBar").show();
		$(".glyphicon").hide();
		$("#cancel").show();
	});
	$("#cancel").click(function(e){
		e.preventDefault();
		// $("#searchBar").toggle();
		$("#searchBar").hide();
		$(".glyphicon").show();
		$("#cancel").hide();
	});
});