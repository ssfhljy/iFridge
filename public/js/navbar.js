		// $("input").on("click", function() {
		// 	//alert($(this).text());
		// });

$(document).ready(function(){
	pageFadeIn();
	initializePage();
	pageFadeOut();
});

function pageFadeIn(){
	$("body").css("display", "none");
    $("body").fadeIn(900);
    // $("body").animate({width: 'left'}); 
}

function pageFadeOut(){
	$("a.transition").click(function(event){
        event.preventDefault();
        linkLocation = this.href;
        $("body").fadeOut(1100, redirectPage);
        // $("body").animate({width: 'right'}, 1200, redirectPage);     
    });
         
    function redirectPage() {
        window.location = linkLocation;
    }
}

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
	    var dateExp = $("#inputDateExp").val();
	    var cat = $("#inputCategory").val();
	    // console.log("mongo log dateExp:"+dateExp+"\n");
	    // alert("mongo log dateExp:"+dateExp+"\n");
	    var name = $("#inputItemName").val();
	    if (name && dateExp){
			var json = {
				"name": name,
		        "user": {"_id": "507f1f7733389439011"},
		        "category": cat,
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
	    }else if(name){
	    	alert("Sorry, cannot add a item with no expiration date.");
	    }else{
	    	alert("Sorry, cannot add a item with no name.");
	    }
	});

	// $('#deleteItem').click(function(e) {

	// 	var pathname = window.location.pathname;
		// alert(pathname);

	// $( "#dialog-confirm" ).dialog({
 //      resizable: false,
 //      // height:140,
 //      modal: true,
 //      buttons: {
 //        "Keep it": function() {
 //          $( this ).dialog( "close" );
 //        },
 //        "Delete Anyway": function() {
 //          $( this ).dialog( "close" );
 //          // $(this).dialog( "destroy" );
 //        }
 //      }
 //    });
/*
		$.get(pathname+"/delete", function() {
			// var path = pathname.slice(0, pathname.lastIndexOf("/"));
			// window.location.href = path;
			window.location.href = pathname+"/delete";
			// window.location.href = '/';
		});*/
	// });

}