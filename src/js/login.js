requirejs(['../js/config.js'],function(){
	requirejs(['jquery'],function($){
		$('#loginsubmit').click(function(){
	        $.post('login.php',{
	          /*email: $('#email').val(),
	          password: $('#password').val()*/
		        password: $('#password').val(),
				phone: $('#loginname').val()
	        }, function(response){
	          var $obj = eval('(' + response + ')');
	          if($obj.state){
	            /*window.location.href = 'index.php';*/
	            window.location.href = '../index.html';
	          } else {
	           	alert($obj.message);
	          }
	        })        
	      })
	});
})