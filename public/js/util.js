		// $("input").on("click", function() {
		// 	//alert($(this).text());
		// });

$(document).ready(function(){
	// $("")
	$('#deleteItem').click(function(e) {

	var pathname = window.location.pathname;
		// alert(pathname);
/*
	$( "#dialog-confirm" ).dialog({
      resizable: false,
      // height:140,
      modal: true,
      buttons: {
        "Keep it": function() {
          $( this ).dialog( "close" );
        },
        "Delete Anyway": function() {
          $( this ).dialog( "close" );
          // $(this).dialog( "destroy" );
        }
      }
    });
*/

		$.get(pathname+"/delete", function() {
			// var path = pathname.slice(0, pathname.lastIndexOf("/"));
			// window.location.href = path;
			window.location.href = pathname+"/delete";
			// window.location.href = '/';
		});
	});

});

