var xhr = new XMLHttpRequest();

	xhr.onreadystatechange = function(){
		if(xhr.readyState === 4 && xhr.status === 200){
			var res = JSON.parse(xhr.responseText);
			console.log(res);
			var ul = document.createElement('ul');
			ul.className = 'productlist';
			for(var i=0;i<res.length;i++){
				var li = document.createElement('li');
				li.innerHTML = '<div class="pic"><img src="'+res[i].src+'"/></div><p>' + res[i].price + '</p><p>成交：' + res[i].counts + '笔</p><p>' + res[i].name + '</p>';

				ul.appendChild(li);
			}

			document.body.appendChild(ul);
		}
	}

	xhr.open('get','../data/product.json',true);
	xhr.send();