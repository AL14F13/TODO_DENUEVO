// JavaScript Document
$(document).ready(function(e) {
document.addEventListener("deviceready",function(){
	$('#btn_panel_crepusculo').on('tap',function(){
		navigator.vibrate(1000);
		//vibrar
	});
	
	$('#btn_prefacios').on('tap',function(){
		navigator.vibrate(1000);
		
	});
	$('#btn_fotogaleria').on('tap',function(){
		navigator.vibrate(1000);
		
	});
	$('#btn_personajes').on('tap',function(){
		navigator.vibrate(1000);
		
	});
	
	$('#btn_musica').on('tap',function(){
		navigator.vibrate(1000);
		
	});
	
	$('#btn_libros').on('tap',function(){
		navigator.vibrate(1000);
		
	});
}); 
});

