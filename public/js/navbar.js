		// $("input").on("click", function() {
		// 	//alert($(this).text());
		// });

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

/*
	$().click(function(e){
		e.preventDefault();

		// Get the div ID, e.g., "project3"
		var projectID = $(this).closest('.project').attr('id');
		// get rid of 'project' from the front of the id 'project3'
		var idNumber = projectID.substr('project'.length);
	});*/
});
