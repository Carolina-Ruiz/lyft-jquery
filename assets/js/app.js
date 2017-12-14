$(document).ready(function(){
	setTimeout(function(){
		$('.cero').fadeOut(1500);
		},3000);
	setTimeout(function(){
		$('.uno').fadeIn(1500);
	},3000);

/*numero de telefono*/
 	$('#num').keyup(function(){
        if($(this).val().length === 10){
            $('#btn').removeClass('disabled');
        }if($(this).val().length < 10){

	function code() {
	  var code = "";
	  var str = "0123456789";
	  for (var i = 0; i < 3; i++) {
	  	code += str.charAt(Math.floor(Math.random() * str.length));
	  }
	  return code;
	}

	alert(code());
	}
})