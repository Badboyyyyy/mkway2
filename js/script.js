/*jshint jquery:true */

$(document).ready(function($) {
	"use strict";

	/* global google: false */
	/*jshint -W018 */

	/*-------------------------------------------------*/
	/* =  portfolio isotope
	/*-------------------------------------------------*/

	var winDow = $(window);
		// Needed variables
		var $container=$('.iso-call');
		var $filter=$('.filter');

		try{
			$container.imagesLoaded( function(){
				$container.trigger('resize');
				$container.isotope({
					filter:'*',
					layoutMode:'masonry',
					animationOptions:{
						duration:750,
						easing:'linear'
					}
				});

				setTimeout(Resize, 1500);
			});
		} catch(err) {
		}

		winDow.on('resize', function(){
			var selector = $filter.find('a.active').attr('data-filter');

			try {
				$container.isotope({ 
					filter	: selector,
					animationOptions: {
						duration: 750,
						easing	: 'linear',
						queue	: false,
					}
				});
			} catch(err) {
			}
			return false;
		});
		
		// Isotope Filter 
		$filter.find('a').on('click', function(){
			var selector = $(this).attr('data-filter');

			try {
				$container.isotope({ 
					filter	: selector,
					animationOptions: {
						duration: 750,
						easing	: 'linear',
						queue	: false,
					}
				});
			} catch(err) {

			}
			return false;
		});


	var filterItemA	= $('.filter li a');

		filterItemA.on('click', function(){
			var $this = $(this);
			if ( !$this.hasClass('active')) {
				filterItemA.removeClass('active');
				$this.addClass('active');
			}
		});

	/*-------------------------------------------------*/
	/* =  preloader function
	/*-------------------------------------------------*/
	
	$('body').ready(function(){
		var mainDiv = $('#container');
		mainDiv.delay(400).addClass('active');
	});

	/*-------------------------------------------------*/
	/* =  search animate
	/*-------------------------------------------------*/

	var searchButton = $('button.search-icon');

	searchButton.on('click', function(event) {
		event.preventDefault();

		var searchBar = $('.search_bar'),
			$this = $(this);
		if ( !$this.hasClass('opened') ) {
			$this.addClass('opened');
			$this.find('.open-search').fadeOut(0);
			$this.find('.close-search').fadeIn(0);
			searchBar.fadeIn(400);
			searchBar.find("input[type='search']").focus();
		} else {
			$this.removeClass('opened');
			$this.find('.open-search').fadeIn(0);
			$this.find('.close-search').fadeOut(0);
			searchBar.fadeOut(400);
		}
	});

	/*-------------------------------------------------*/
	/* =  nav animate
	/*-------------------------------------------------*/

	var ToogleMenu = $('a.mobile-nav-toggle');

	ToogleMenu.on('click', function(event) {
		event.preventDefault();

		var containerMover = $('#container'),
			mobileMenu = $('.mobile-menu'),
			$this = $(this);
		if ( !$this.hasClass('opened') ) {
			$this.addClass('opened');
			containerMover.addClass('move');
			mobileMenu.addClass('open');
		} else {
			$this.removeClass('opened');
			containerMover.removeClass('move');
			mobileMenu.removeClass('open');
		}
	});

	/*-------------------------------------------------*/
	/* =  toggle course-panel-content
	/*-------------------------------------------------*/

	var panelHeading = $('.course-panel-heading');

	panelHeading.on('click', function() {
		$(this).toggleClass('active');
	});


 	try {
		var fenway = [42.345573,-71.098326]; //Change a map coordinate here!
		var markerPosition = [42.345573,-71.098326]; //Change a map marker here!
		$('#map').gmap3({
				center: fenway,
				zoom: 13,
				scrollwheel: false,
				mapTypeId : google.maps.MapTypeId.ROADMAP
			})
			.marker({
				position: markerPosition,
				icon: 'images/marker.png'
		});
	} catch(error) {

	}

	/* ---------------------------------------------------------------------- */
	/*	Contact Form
	/* ---------------------------------------------------------------------- */

	


		
	

			
		});
	



function Resize() {
	$(window).trigger('resize');
}
