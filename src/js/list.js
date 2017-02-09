//config相对html
requirejs(['../js/config.js'],function(){
	requirejs(['jquery'],function($){
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
})