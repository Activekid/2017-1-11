//config相对html
requirejs(['js/config.js'],function(){
	requirejs(['jquery','jquery.gdscarousel'],function($,gdscarousel){
		$('.nav-bar').gdscarousel({
			imglist:['img/banner1.jpg','img/banner2.jpg','img/banner3.jpg','img/banner4.jpg','img/banner5.jpg','img/banner6.jpg'],
			page:'center',
			type:'fade',
			showButton:false,
			width:1370,
			height:491
		});
		$('.scroll-A').gdscarousel({
			imglist:['img/r1.jpg','img/r2.jpg','img/r3.jpg'],
			page:'center',
			type:'fade',
			showButton:true,
			width:188,
			height:142,
			autoPlay:false
		});
		
		var $item = $('.item');

		$item.each(function(){
			var $self = $(this);
			var $ul = $self.children('ul');
			$self.on('mouseenter',function() {
				$ul.show();
					$self.on('mouseout',function() {
					$ul.hide();
				})
			})
		}) 
	});
})