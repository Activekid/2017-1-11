window.onload = function(){
		var con_fangDaIMg = document.getElementsByClassName('con-fangDaIMg')[0];
		var de_center = document.getElementsByClassName('de_center')[0];
		var jd_price = document.getElementById('jd-price');
		// 用于保存购物车商品信息
		var carList = [];

		// 先获取当前cookie，如果没设置cookie有效时间，第一次进来为空，关闭浏览器也清零
		var cookies = document.cookie.split('; ');
		for(var i=0;i<cookies.length;i++){
			var arr = cookies[i].split('=');
			if(arr[0] === 'carlist'){
				carList = JSON.parse(arr[1]);
			}
		}

		// 事件委托
		de_center.onclick = function(e){
			e = e || window.event;
			var target = e.target || e.srcElement;

			// 添加到购物车
			if(target.tagName.toLowerCase() === 'button'){
				// 先创建一个对象保存当前被点击的商品信息
				var goodsObj = {};
				goodsObj.qty = 1;
				goodsObj.name = de_center.children[0].innerHTML;
				goodsObj.price = jd_price.innerHTML;
				goodsObj.imgUrl = con_fangDaIMg.children[0].src;

				// 如果cookie为空，则直接添加
				if(carList.length===0){
					// 添加到carList
					carList.push(goodsObj);
				}else{
					
					carList[0].qty++;
						
					}	
				}
				
				
				console.log(carList);
				// 存入cookie
				// 把对象/数组转换诚json字符串：JSON.stringify()
				document.cookie = 'carlist=' + JSON.stringify(carList);
			}

		}
	
