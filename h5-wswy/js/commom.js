//侧边滑动
function slideToggle(){
	var slideout = new Slideout({
	        'panel': document.getElementById('main'),
	        'menu': document.getElementById('menu'),
	        'padding': 242,
	        'tolerance': 0
	      });

	      document.querySelector('.spn-back,.spn-slideout-toggle').addEventListener('click', function() {
	        slideout.toggle();
	      });

	      document.querySelector('.menu').addEventListener('click', function(eve) {
	        if (eve.target.nodeName === 'A') { slideout.close(); }
	      });
};

//注销登录
function signOut(){
	$(".slide-a-logout").click(function(){
 		$(".div-logout-mask").show();
 		return false;
 	});
	$(".a-btn-no").click(function(){
		$(".div-logout-mask").hide();
		return false;
	});
}

function search(){
	$(".a-btn-search").click(function(){
		
	});
}
