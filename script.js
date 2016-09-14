$(document).ready(function() {
  $('h1').on('mouseenter', function() {
  	$(this).animate({
    	'font-size': '+=1px'
    }, 'fast');
  });
  $('h1').on('mouseleave', function() {
    $(this).animate({
    	'font-size': '-=1px'
    }, 'fast');
  });
  $('h1').on('click', function () {
  	$(this).siblings().slideToggle();
  });
	$('h2').on('click', function () {
  	$(this).siblings().slideToggle();
  });
  $('h2').on('mouseenter', function() {
  	$(this).animate({
    	'font-size': '+=1px'
    }, 'fast');
  });
  $('h2').on('mouseleave', function() {
    $(this).animate({
    	'font-size': '-=1px'
    }, 'fast');
  });
  $('figure').on('mouseenter', function () {
    $(this).children('img').animate({
      'height': '+=12px',
      'width': '+=12px',
    });
    $(this).children('figcaption').animate({
    	'font-size': '+=2px',
      'width': '+=50px',
    });
    $(this).children().css({
      'font-weight': 'bold'
    });
  });
  $('figure').on('mouseleave', function () {
    $(this).children('img').animate({
      'height': '-=12px',
      'width': '-=12px'
    });
    $(this).children('figcaption').animate({
    	'font-size': '-=2px',
      'width': '-=50px'
    });
    $(this).children().css({
      'font-weight': 'normal'
    });
  });
});
