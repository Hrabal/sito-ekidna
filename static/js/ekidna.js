$(document).ready(function () {
	var speed = 1000;
	var bg_n = 0

	// BACKGROUND SLIDE
	setInterval(function(){
		bg_n += 1;
		if (bg_n >= bgs.length) {bg_n = 0};
		$('.slideshow').css('background-image', 'url(../static/img/bgs/' + bgs[bg_n] + ')'); 
	}, speed * 6);


	// INTRO

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


	// CONTENT IMAGES

	function isElementInViewport (el) {
		if (typeof jQuery === "function" && el instanceof jQuery) {
	        el = el[0];
	    }
	    var rect = el.getBoundingClientRect();
	    return (
	        rect.top >= 0 &&
	        rect.left >= 0 &&
	        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /*or $(window).height() */
	        rect.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
	    );
	};

	function clearHlImages () {
		$('#base-pics').empty();
	};

	function renderHlImages () {
		var hl_imgs = $('#base-pics').children(),
			cont_imgs = $('.cont_img');
		cont_imgs.each(function () {
			if (isElementInViewport(this)) {
				$(this).appendTo($('#base-pics'))
			}
		});
	};

	// $('#content').scroll(function () {
	// 	renderHlImages();
	// });


	// AJAX PAGINE
	$('.menu-link').click(function() {
		var pag_id = $(this).attr('id'),
			data = {pagina: pag_id},
			url = $SCRIPT_ROOT + '/paginator',
			active_link = $(this);
		// $('.hamburger').trigger('click');
		$.ajax({url:url, data:data}).done(function (reply) {
			clearHlImages();
			$('#content').html(reply);
			$('.menu-link').removeClass('current_page');
			active_link.addClass('current_page');
			$('#content').html(reply);
			if (pag_id == 'gallery') {
				$('#base-pics').addClass('photo_container');
			}
			else {
				$('#base-pics').removeClass('photo_container');
			} 
			renderHlImages();
		});
	});
});
	