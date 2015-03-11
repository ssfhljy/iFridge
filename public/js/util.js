		// $("input").on("click", function() {
		// 	//alert($(this).text());
		// });

$(document).ready(function(){

	$('.alert').hide();

	// $("")
	$('#deleteItem').click(function(e) {

		var pathname = window.location.pathname;
		// alert(pathname);

		// $('#deleteItem').hide();
		$('.panelB').hide();
		$('#delete_alert').show();

		$('#confirm_del').click(function(event) {
			/* Act on the event */
			$.get(pathname+"/delete", function() {
			// var path = pathname.slice(0, pathname.lastIndexOf("/"));
			// window.location.href = path;
				$('#delete_alert').alert('close');
				window.location.href = pathname+"/delete";
			// window.location.href = '/';
			});
			// 
		});
		$('#cancel_del').click(function(event) {
			// $('#delete_alert').alert('close');
			$('#delete_alert').hide();
			// $('#deleteItem').show();
			$('.panelB').show();
			// window.location.href = pathname;
		});
	});

	$('#logout').click(function(e) {

		// e.disableDefault();
		e.preventDefault();
		var pathname = window.location.pathname;
		// alert(pathname);

		// $('#logout').hide();
		$('.panelB').hide();
		$('#logout_alert').show();

		$('#confirm_logout').click(function(event) {
			/* Act on the event */
			$('#logout_alert').alert('close');
			window.location.href = '/login';
			// 
		});

		$('#cancel_logout').click(function(event) {
			// $('#delete_alert').alert('close');
			$('#logout_alert').hide();
			// $('#logout').show();
			$('.panelB').show();
			// window.location.href = pathname;
		});
	});

});

