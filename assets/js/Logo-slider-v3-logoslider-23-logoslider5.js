$(document).ready(function(){
  
  var interval = 3500;
  var img_count = $('.slide').length;
  //alert(img_count);
  var imgs_displayed;  
    
  if($(window).width() < 700){ imgs_displayed = 4;}
  if($(window).width() < 500){ imgs_displayed = 2;}
  if($(window).width() < 300){ imgs_displayed = 1;}
  if($(window).width() >700){ imgs_displayed = 5;}
 
  
  var slide_width = 100/imgs_displayed;
  $('.slide').css('width', slide_width + '%');
  var i, left = 0;
  for(i=0; i<img_count; i++){
    $('.slide').eq(i).css('left', left + '%');
    left += slide_width;
  }
  var a;
  var b = 0;
  
  setInterval(function(){ 
   
  function slideEffect(){ 
    left = -slide_width;
    for(a=0; a<img_count; a++){
     $('.slide').eq(a).css('left', left + '%');
      left += slide_width;
   }
  } 
    
function imgToEnd(){  
if (b == 1){  $('.slide').eq(0).addClass('notransition');
    $('.slide').eq(0).appendTo('.slider_container');
    var last_slide_id = img_count - 1;
    $('.slide').eq(last_slide_id).removeClass('notransition');
           }
}
    
    $.when(imgToEnd()).done(slideEffect());
    b = 1;
  
  }, interval);
  
  
});//end document ready