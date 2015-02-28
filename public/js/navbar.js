		// $("input").on("click", function() {
		// 	//alert($(this).text());
		// });

$(document).ready(function(){
	
	initializePage();

});

function initializePage(){

	$(function() {
    	$.stayInWebApp();
	});

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

	$('#newItem').click(function(e) {
		// console.log('clicked');
		// 
		e.preventDefault();
		console.log("clicked");
		var currentDate = new Date();
	    var day = currentDate.getDate();
	    var month = currentDate.getMonth() + 1;
	    var year = currentDate.getFullYear();
	    var today = month + "/" + day + "/" + year;
	    var dateExp = $('#InputDateExp').val();
	    var name = $("#inputItemName").val();
		var json = {
			"name": name,
	        "user": {"_id": "507f1f7733389439011"},
	        "category": {"_id": "507f1f77bcf86cd799439011"},
	        "imageURL": "/img/apple-touch-icon-iphone.png",
	        "dateExp": dateExp,
	        "dateAdded": today,
	        "note": ""
		};

		// console.log("json:"+json+"\n\n");

		$.post('/item/new', json, function() {
			console.log("B\n");
			window.location.href = '/'; // reload the page
			// history.back();
			console.log("C\n");
		});
	});

	$('#deleteItem').click(function(e) {

		var pathname = window.location.pathname;
		// alert(pathname);

		$.get(pathname+"/delete", function() {
			// var path = pathname.slice(0, pathname.lastIndexOf("/"));
			// window.location.href = path;
			window.location.href = pathname+"/delete";
			// window.location.href = '/';
		});
	});
}