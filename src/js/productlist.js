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
			//默认第一页
			$.post('../html/goodslist.php',{page:1},function(response){
				console.log(response);
				var res = JSON.parse(response);
				var $ul = $('<ul/>').addClass('wrap');
				$.each(res,function(idx,item){
					
					var $li = $('<li/>').addClass('inline').html('<div class="pic"><img src="'+item.src+'"/></div><p>' + item.price + '</p><p>成交：' + item.counts + '笔</p><p>' + item.name + '</p>'+'<a href="productdetails.html">添加到购物车</a>');
					$ul.append($li);
				});
				$('.goodlist').append($ul);
				//$('<div/>').addClass('page').html('<span class="clk">1</span><span>2</span>').appendTo('body');
			});
			//点击分页
			$('.page span').on('click',function(){
				
				$('.goodlist').empty();
				var $self = $(this);
				//点击span高亮
				$self.parent('.page').children().removeClass('clk');
				$self.addClass('clk');
				//点击分页
				//请求数据
				$.post('../html/goodslist.php',{page:$self.html()},function(response){
					console.log(response);
					var res = JSON.parse(response);
					var $ul = $('<ul/>').addClass('wrap');
					$.each(res,function(idx,item){
						
						var $li = $('<li/>').addClass('inline').html('<div class="pic"><img src="'+item.src+'"/></div><p>' + item.price + '</p><p>成交：' + item.counts + '笔</p><p>' + item.name + '</p>'+'<a href="productdetails.html">添加到购物车</a>');
						$ul.append($li);
					});
					$('.goodlist').append($ul);
				});
			});
			
		});
		
	})(jQuery);
	