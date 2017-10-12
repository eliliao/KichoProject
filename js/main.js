$(function(){
	$('.slick').slick({
	  dots: false,
	  infinite: true,
	  speed: 300,
	  slidesToShow: 1,
	  arrows: true,
	  adaptiveHeight: true
	});

	var windowW = $(window).width() // var 單純一個自定義變數(mixin)
	if (windowW > 480) {
		// $('.infoBox img').css({'display': 'none'})
		var RWDslideCount = 3
	} else {
		var RWDslideCount = 1
	}
	$('.productSlick').slick({
	  dots: false,
	  infinite: true,
	  speed: 300,
	  slidesToShow: RWDslideCount,
	  arrows: true,
	  adaptiveHeight: true
	});
	$('.pitaSlick').slick({
	  dots: false,
	  infinite: true,
	  speed: 300,
	  slidesToShow: RWDslideCount,
	  arrows: true,
	  adaptiveHeight: true
	});
	$('.sandwichSlick').slick({
	  dots: false,
	  infinite: true,
	  speed: 300,
	  slidesToShow: RWDslideCount,
	  arrows: true,
	  adaptiveHeight: true
	});


	$('.autoplay').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: true,
	  autoplay: true,
	  autoplaySpeed: 2000,
	});

	$('.Activeautoplay').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  autoplay: true,
	  autoplaySpeed: 2000,
	});

	$('.Blogautoplay').slick({
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  autoplay: false,
	  autoplaySpeed: 2000,
	  vertical: true,
	  verticalSwiping: true,
	});


	$('.lightboxImgSlick').slick({
	  dots: false,
	  infinite: true,
	  speed: 300,
	  slidesToShow: 1,
	  arrows: true,
	  adaptiveHeight: true
	});

	$('.lightboxTextSlick').slick({
	  dots: false,
	  infinite: true,
	  speed: 300,
	  slidesToShow: 1,
	  arrows: true,
	  adaptiveHeight: true
	});


	$('#fullpage').fullpage({
		//Navigation
		menu: '#menu',
		lockAnchors: false	,
		anchors:['home', 'about', 'eat', 'active', 'blog', 'where'],
		navigation: false,
		navigationPosition: 'right',
		navigationTooltips: ['firstSlide', 'secondSlide'],
		showActiveTooltip: false,
		slidesNavigation: false,
		slidesNavPosition: 'bottom',

		//Scrolling
		css3: true,
		scrollingSpeed: 700,
		autoScrolling: true,
		fitToSection: true,
		fitToSectionDelay: 1000,
		scrollBar: false,
		easing: 'easeInOutCubic',
		easingcss3: 'ease',
		loopBottom: false,
		loopTop: false,
		loopHorizontal: true,
		continuousVertical: false,
		continuousHorizontal: false,
		scrollHorizontally: false,
		interlockedSlides: false,
		dragAndMove: false,
		offsetSections: false,
		resetSliders: false,
		fadingEffect: false,
		normalScrollElements: '#element1, .element2',
		scrollOverflow: false,
		scrollOverflowReset: false,
		scrollOverflowOptions: null,
		touchSensitivity: 15,
		normalScrollElementTouchThreshold: 5,
		bigSectionsDestination: null,

		//Accessibility
		keyboardScrolling: true,
		animateAnchor: true,
		recordHistory: true,

		//Design
		controlArrows: true,
		verticalCentered: true,
		sectionsColor : ['#ccc', '#fff'],
		paddingTop: '0px',
		paddingBottom: '0px',
		fixedElements: '#header',
		responsiveWidth: 0,
		responsiveHeight: 0,
		responsiveSlides: false,
		parallax: false,
		parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},

		//Custom selectors
		sectionSelector: '.section',
		slideSelector: '.slide',
		lazyLoading: true,

		//events
		onLeave: function(index, nextIndex, direction){},
		afterLoad: function(anchorLink, index){},
		afterRender: function(){},
		afterResize: function(){},
		afterResponsive: function(isResponsive){},
		afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
		onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}
	});


// pita/sandwich click //

	$('.pitaWrap').click(function(){
		$('.sandwichWrap').toggleClass('eatAdd-left')
		$('.pitaContent').toggleClass('eatAdd-left')
		$('.pitaContent').toggleClass('contentAdd') // 透明度 //
		$('.pitaImg, .sandwichImg').toggleClass('heightAdd')
		$('.mainProduct').toggleClass('heightAdd')
		$('.productStyle1').toggleClass('bottomAdd')
	});

	$('.sandwichWrap').click(function(){
		$('.pitaWrap').toggleClass('eatAdd-right')
		$('.sandwichContent').toggleClass('eatAdd-right')
		$('.sandwichContent').toggleClass('contentAdd') // 透明度 //
		$('.pitaImg, .sandwichImg').toggleClass('heightAdd')
		$('.mainProduct').toggleClass('heightAdd')
		$('.productStyle2').toggleClass('bottomAdd')
	});

// pita/sandwich click popup //

	$('.productBox1').click(function(){
		$('.lightBoxChild').toggleClass('detail-bottom')
		// $('.lightBoxChild').toggleClass('.lightboxAdd')
	});

	$('.lightBoxClose').click(function(){
		$('.lightBoxChild').toggleClass('detail-bottom')
		// $('.lightBoxChild').toggleClass('.lightboxAdd')
	});
});
