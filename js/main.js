var $ = jQuery.noConflict();

$(document).ready(init);

/***

SETUP

**/

function init(){

	//add side nav button listener
	$('.sidenav-close-btn').click( function(event) {
		closeSidenav();
	});


	//setup hamburger menu click
	$('#menu-open').click( function(event) {
		openSidenav();
	} );

}




function closeSidenav(){
	var sideNav = $('.sidenav');
	sideNav.toggleClass("slide-in");
	sideNav.toggleClass("slide-out");
}

function openSidenav(){
	var sideNav = $('.sidenav');
	if( sideNav.hasClass("slide-out") ){
		sideNav.toggleClass("slide-out")
	}
	sideNav.toggleClass("slide-in");
}







