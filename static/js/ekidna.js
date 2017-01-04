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
		$('.content-container').toggleClass("content-present").promise().done(function () {
			$('#content').toggleClass("out_vp");
			$('#base-pics').toggleClass("out_vp");
		});
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

	function renderHlImages (callback) {
		$('#content .cont_img').each(function () {
			// $('#base-pics').append();
			$(this).appendTo($('#base-pics')).wrap("<div class='hl_img'></div>");
		});
		callback();
	};

	function loopHlImages() {
		var pics = $('#base-pics .hl_img .loop_img'),
			pic_n = 0;
		console.log(pics);
		if (pics.length > 0) {
			$('#base-pics').prepend('<div class="gallery_focus"><img></div>');
			pics.fadeOut(1);
			setInterval(function(){
				$('.gallery_focus img').fadeOut(speed/2, function() {
					pic_n += 1;
					if (pic_n >= pics.length) {pic_n = 0};
					$('.gallery_focus').prepend(pics[pic_n]);
					$('.gallery_focus img').fadeIn(speed);
				});
			}, speed * 4);
		};
	};

	// $('#content').scroll(function () {
	// 	renderHlImages();
	// });

	// GALLERY

	function galleryFocus(img) {
		var src = $(img).attr('src'),
			focus_div = $('.gallery_focus');
		$('.gallery_focus img').stop();
		$('.gallery_focus img').animate({left : "0px"}, 200, function () {
			$('.gallery_focus img').attr('src', src);
			if ($('.gallery_focus img')[0].clientWidth > focus_div[0].clientWidth) {
				var delta = $('.gallery_focus img')[0].clientWidth - focus_div[0].clientWidth;
				$('.gallery_focus img').animate({left: "-="+delta+ "px"}, speed * 2, 'swing');
			};
		});
	};

	// AJAX PAGINE
	$('.menu-link').click(function() {
		var pag_id = $(this).attr('id'),
			data = {pagina: pag_id},
			url = $SCRIPT_ROOT + '/paginator',
			active_link = $(this),
			v_left = (Math.floor((Math.random() * 10) + 1) / 4) + 1,
			v_right = (Math.floor((Math.random() * 10) + 1) / 4) + 1;
		console.log(  v_left, v_right)
		console.log( speed / v_left, speed / v_right)
		$('#content').animate({marginTop: "101vh"}, speed / v_left, function () {
			$('#base-pics').animate({marginTop: "101vh"}, speed / v_right, function () {
				$.ajax({url:url, data:data}).done(function (reply) {
					clearHlImages();
					$('.menu-link').removeClass('current_page');
					active_link.addClass('current_page');
					$('#content').html(reply);
					if (pag_id == 'gallery') {
						// GALLERY
						$('#base-pics').append('<div class="gallery_focus"><img></div>');
						var src = $($('.gallery_img')[0]).attr('src');
						$('.gallery_focus img').attr('src', src);
						$('.gallery_img').mouseenter(function () {
							galleryFocus(this);
						});
					}
					if (pag_id == 'dove_siamo') {
						$('#base-pics').append('<iframe id="map_frame" class="hl_img" src="static/map.html"><img></iframe>');
					}
					renderHlImages(loopHlImages);
					$('#content').animate({marginTop: "0vh"}, speed / v_right, function () {
						$('#base-pics').animate({marginTop: "0vh"}, speed / v_left);
					});
				});	
			});
		});
	});
});
