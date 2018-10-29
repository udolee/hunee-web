
$(document).ready(function(){
	
	
	var hun = $('.header-col1');
	var x = $('#overlay');
	
	hun.click(function() { 
		$('#overlay').toggle();
	});
	
	x.click(function() {
		$('#overlay').hide();
	});
	
	$(document).keyup(function(e) {

  		if (e.keyCode == 27) { $('#overlay').hide(); }   // esc
	});
	
	
	
	var photo = $('.next');
	
	$('.fadein img:gt(0)').hide();
//	setInterval(function(){$('.fadein :first-child').hide().next('img').show().end().appendTo('.fadein');}, 1000);
	photo.click(function(e){
	$('.fadein :first-child').hide().next('img').show().end().appendTo('.fadein');
//	


//	$('#overlay').animate({ 
//        'backgroundColor': 'rgb('+ (Math.floor(Math.random() * 256)) +','+ 
//		(Math.floor(Math.random()*256)) +','+ 
//		(Math.floor(Math.random() * 256)) +')'
 //   }, 150);
	 e.stopPropagation();
	});
	
	
	
	
});