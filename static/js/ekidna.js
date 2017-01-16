$(document).ready(function () {
	var speed = 1000,
		bg_n = 0,
		hl_img_loop_id = 0,
		isPaused = {};

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
			$('.content').toggleClass("out_vp");
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

	function clearHlImages (loop_id) {
		$('#base-pics').empty();
		clearInterval(loop_id);
	};

	function renderHlContent (callback) {
		$('.content .cont_img').each(function () {
			$(this).appendTo($('#base-pics')).wrap("<div class='hl_img'></div>");
		});
		var loop_id = callback();
		return loop_id
	};

	function loopHlImages() {
		var pics = $('#base-pics .hl_img .loop_img'),
			pic_n = 0;
		if (pics.length > 0) {
			$('#base-pics').prepend('<div class="gallery_focus"><img></div>');
			pics.fadeOut(1);
			var loop_id = setInterval(function() {
				$('.gallery_focus img').fadeOut(speed/2, function() {
					if (!loop_id.pause) {
						pic_n += 1;
						if (pic_n >= pics.length) {pic_n = 0};
						$(pics[pic_n]).css({left : "0px"})
						$('.gallery_focus').prepend(pics[pic_n]);
						$('.gallery_focus img').fadeIn(speed);
					}
				});
			}, speed * 8);
			slide_img(loop_id);
		};
		return loop_id
	};

	function slide_img(loop_id) {
		var focus_div = $('.gallery_focus')[0],
			img = $('.gallery_focus img')[0];
		$(img).css({left : "0px"})
		loop_id.pause = true;
		if (img.clientWidth > focus_div.clientWidth) {
			var delta = img.clientWidth - focus_div.clientWidth;
			$(img).animate({left: "-="+delta+ "px"}, speed * 2, 'swing', function () {
				isPaused.pause = false;
			});
		}
	}

	// EVENTI

	function show_evt (id) {

	}

	// $('.content').scroll(function () {
	// 	renderHlImages();
	// });

	// GALLERY

	function galleryFocus(img) {
		var src = $(img).attr('src'),
			loop_id = 0;
		$('.gallery_focus img').stop();
		$('.gallery_focus img').animate({left : "0px"}, 200, function () {
			$('.gallery_focus img').attr('src', src);
			slide_img(loop_id);
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
		$('.content').animate({marginTop: "101vh"}, speed / v_left, function () {
			$('#base-pics').animate({marginTop: "101vh"}, speed / v_right, function () {
				$.ajax({url:url, data:data}).done(function (reply) {
					clearHlImages(hl_img_loop_id);
					$('.menu-link').removeClass('current_page');
					active_link.addClass('current_page');
					$('.content').html(reply);
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
					if (pag_id == 'programma') {
						$('.eventi').css({"padding-top": $('#top-eventi')[0].clientHeight + 10});
						$('.evt_selector').click(function(){
							$('.evento').addClass('hide');
							$($(this).attr('evt')).removeClass('hide', 1000, "easeInBack");
						});
					}
					hl_img_loop_id = renderHlContent(loopHlImages);
					$('.content').animate({marginTop: "0vh"}, speed / v_right, function () {
						$('#base-pics').animate({marginTop: "0vh"}, speed / v_left);
					});
				});	
			});
		});
	});
});
