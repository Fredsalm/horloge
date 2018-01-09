(function main(){
	function horlogeMaj(){

	var date = new Date();
	var heure = date. getHours();
	var minutes = date. getMinutes();
	var sec = date.getSeconds();

	$('#heure').css({'transform':'rotate('+(heure*30)+'deg)'})
	$('#minute').css({'transform':'rotate('+(minutes*6)+'deg)'});
	$('#sec').css({'transform':'rotate('+(sec*6)+'deg)'});
	}
	

	setInterval(horlogeMaj,500);

	
}());