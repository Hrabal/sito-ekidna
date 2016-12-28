$(document).ready(function () {
	var speed = 1000;
	var bg_n = 0

	// BACKGROUND SLIDE
	setInterval(function(){
		bg_n += 1;
		if (bg_n >= bgs.length) {bg_n = 0};
		$('.slideshow').css('background-image', 'url(../static/img/bgs/' + bgs[bg_n] + ')'); 
	}, speed * 6);


	// AJAX PAGINE
	$('.menu-link').click(function() {
		var data = {pagina: $(this).attr('id')},
			url = $SCRIPT_ROOT + '/paginator',
			active_link = $(this);
		// $('.hamburger').trigger('click');
		$.ajax({url:url, data:data}).done(function (reply) {
			$('#content').html(reply);
			$('.menu-link').removeClass('current_page');
			active_link.addClass('current_page');
			$('#content').html(reply);
		});
	});
	// INTRO

	// $('#circle_home').click(function () {
	// 	$('#intro_content').animate({opacity: 0}, speed / 3);
	// 	$('#circle_home').animate({width: '150%', height: '150%', opacity: 0}, speed);
	// 	$('.overbg').animate({opacity:1}, speed*2);
	// 	$(this).hide(speed);
	// });

	// MENU

	var $hamburger = $(".hamburger");
	$hamburger.on("click", function(e) {
		$('#logo_cr').toggleClass("center");
		$('#logo_cr').toggleClass("cicrcle-top");
		$('.overbg').toggleClass("overbg-on");
		$('.content-container').toggleClass("content-present");
		// $('#menu_bg').toggleClass('open').promise().done(function(){
		// 	$('#menu').fadeToggle(speed/2);
		// });
		$hamburger.toggleClass("is-active");
	});
});
	