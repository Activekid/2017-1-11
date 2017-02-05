/*var xhr = new XMLHttpRequest();

	xhr.onreadystatechange = function(){
		if(xhr.readyState === 4 && xhr.status === 200){
			var res = JSON.parse(xhr.responseText);
			console.log(res);
			var ul = document.createElement('ul');
			ul.className = 'productlist';
			for(var i=0;i<res.length;i++){
				var li = document.createElement('li');
				li.innerHTML = '<div class="pic"><img src="'+res[i].src+'"/></div><p>' + res[i].price + '</p><p>成交：' + res[i].counts + '笔</p><p>' + res[i].name + '</p>';
				li.style.display = 'inline-block';
				ul.appendChild(li);
				ul.className = 'wrap';
			}

			document.body.appendChild(ul);
		}
	}

	xhr.open('get','../data/product.json',true);
	xhr.send();*/
	;(function($){
		$(function(){
			$.post('../html/goodslist.php',{page:1},function(response){
				console.log(response);
				var res = JSON.parse(response);
				var $ul = $('<ul/>').addClass('wrap');
				$.each(res,function(idx,item){
					
					var $li = $('<li/>').addClass('inline').html('<div class="pic"><img src="'+item.src+'"/></div><p>' + item.price + '</p><p>成交：' + item.counts + '笔</p><p>' + item.name + '</p>');
					$ul.append($li);
				});
				$('body').append($ul);
			})
		});
	})(jQuery);