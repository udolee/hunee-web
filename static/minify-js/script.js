$(document).ready(function(){var hun=$('.header-col1');var x=$('#overlay');hun.click(function(){$('#overlay').toggle()});x.click(function(){$('#overlay').hide()});$(document).keyup(function(e){if(e.keyCode==27){$('#overlay').hide()}});var photo=$('.next');$('.fadein img:gt(0)').hide();photo.click(function(e){$('.fadein :first-child').hide().next('img').show().end().appendTo('.fadein');e.stopPropagation()})});