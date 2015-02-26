$(document).ready(function(){
	//alert("ready");

	// initial navbar look
	$("#cameraInput").hide();
	$("#searchBar").hide();
	$("#cancel").hide();
	$(".glyphicon-camera").click(function(e){
		e.preventDefault();
		$("#cameraInput").click(); // trigger cammera button
	});

	// click camera input button will hide
	$(".cb").click(function(){
		$(this).hide();
	});

});

$(document).ready(function(){
	// when click search
	$(".glyphicon-search").click(function(e){
		e.preventDefault();
		// $("#searchBar").toggle();
		$("#searchBar").show();
		$(".glyphicon").hide();
		$("#cancel").show();
	});

	// cancel from search
	$("#cancel").click(function(e){
		e.preventDefault();
		// $("#searchBar").toggle();
		$("#searchBar").hide();
		$(".glyphicon").show();
		$("#cancel").hide();
	});
});
