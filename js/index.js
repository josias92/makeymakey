
$('document').ready(function(){
    var options = { 
    videoId: 'UkzRXyWF3SY', 
    start: 4,
    mute: false
  };
  
 $('#wrapper').tubular(options);
});    


  $('html').keypress( function(e){
 
  if (e.keyCode === 32) {
    
    $('#wrapper').show();
    console.log(e.keyCode);
  }
  });