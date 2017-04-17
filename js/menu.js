
$('#mostrar-nav').on('click',function(){
  var className = $('#nav-show').attr('class');
  $('#nav-show').addClass('mostrar');
  $('#menu').toggleClass('hide');
});


$('#mostrar-nav-2').on('click',function(){
  var className = $('#nav-show').attr('class');
  $( "#nav-show" ).removeClass("mostrar")
  $( "#menu" ).removeClass("hide")
});


$('#parallax').on('click',function(){
  var className = $('#nav-show').attr('class');
  $( "#nav-show" ).removeClass("mostrar")
  $( "#menu" ).removeClass("hide")
});


$('#projects').on('click',function(){
  var className = $('#nav-show').attr('class');
  $( "#nav-show" ).removeClass("mostrar")
  $( "#menu" ).removeClass("hide")

});


$('footer').on('click',function(){
  var className = $('#nav-show').attr('class');
  $( "#nav-show" ).removeClass("mostrar")
  $( "#menu" ).removeClass("hide")
});

$('.work').on('click',function(){
  var className = $('#nav-show').attr('class');
  $( "#nav-show" ).removeClass("mostrar")
  $( "#menu" ).removeClass("hide")
});
