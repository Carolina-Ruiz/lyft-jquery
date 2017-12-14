$(document).ready(function(){
	$('.uno').hide();
	setTimeout(function(){
		$('.cero').fadeOut(1500);
		},3000);
	setTimeout(function(){
		$('.uno').fadeIn(1500);
	})

	$('#btn').click(code) {
	function code() {
	  var code = "";
	  var str = "123456789";
	  for (var i = 0; i < 3; i++) {
	  	code += str.charAt(Math.floor(Math.random() * str.length));
	  }
	  return code;
	}

	alert(code());
	}
})