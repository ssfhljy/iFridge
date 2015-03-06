'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	analytic();
})

/*
 * Function that is called when the document is ready.
 */
function analytic() {
	// add any functionality and listeners you want here

  $(".version_a").click(function(){
    //add your Woopra tracking code for version A's like button click event
    woopra.track("version_b_add_click");
  })

  $(".version_b").click(function(){
    //add your Woopra tracking code for version A's like button click event
    woopra.track("version_b_add_click");
  })

}