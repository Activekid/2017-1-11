requirejs(['../js/config.js'],function(){
	requirejs(['jquery'],function($){
		$('#submit').click(function(){
				var $phoneVal = $('#phone').val();
				/*if($phoneVal.trim() === ''){
					alert('请输入手机号码');
				}*/
				var reg = /1[34578]\d{9}/;
				if($phoneVal.trim() === '' || !reg.test($phoneVal)){
					alert('请输入正确的手机号码');
					return false;
				}
				var $passVal = $('#password').val();
				if($passVal.trim() === ''){
					alert('请输入密码');
					return false;
				}
				$.post('register.php',{
					//email: $('#email').val(),
					password: $('#password').val(),
					phone: $('#phone').val()
				}, function(response){
					var $obj = eval('(' + response + ')');
					//console.log($obj);
					if($obj.state){
						alert('注册成功！');
					} else {
						alert($obj.message);
					}
				})				
			})
	});
})