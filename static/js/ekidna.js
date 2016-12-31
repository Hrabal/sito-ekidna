$(document).ready(function () {
	var speed = 1000;
	var bg_n = 0;

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
	        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
	        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
	    );
	};

	function clearHlImages () {
		$('#base-pics').empty();
	};

	function renderHlImages () {
		$('#content .cont_img').each(function () {
			if (isElementInViewport(this)) {
				$('#base-pics').append();
				$(this).appendTo($('#base-pics')).wrap("<div class='hl_img'></div>");
			}
		});
	};

	// $('#content').scroll(function () {
	// 	renderHlImages();
	// });

	// GALLERY

	function galleryFocus(img) {
		var src = $(img).attr('src'),
			focus_div = $('.gallery_focus');
		$('.gallery_focus img').attr('src', src);
		$('.gallery_focus img').css({"width":"", "height":"", "top": "", "left" : ""});
		if ($('.gallery_focus img')[0].clientWidth > focus_div[0].clientWidth) {
			var delta = $('.gallery_focus img')[0].clientWidth - focus_div[0].clientWidth;
			$('.gallery_focus img').animate({left: "-="+delta+ "px"}, speed, 'linear');
			};
	};

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
				// GALLERY
				$('#base-pics').append('<div class="gallery_focus"><img></div>');
				$('.gallery_img').mouseenter(function () {
					galleryFocus(this);
				});
			}
			else {
				$('.gallery_focus').remove();
			}
			if (pag_id == 'dove_siamo') {
				$('#base-pics').append('<iframe id="map_frame" class="hl_img" src="static/map.html"><img></iframe>');
			}
			else {
				$('map_frame').remove();
			}
			renderHlImages();
		});
	});
});
