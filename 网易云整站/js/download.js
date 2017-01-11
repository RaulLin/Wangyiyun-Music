window.onload=function(){
	downloadFn();

//用户登录
	function downloadFn(){
		var download=document.querySelector(".download");
		var downloada=document.querySelector(".downloada");		
		var downloadaBtn=document.querySelector(".downloadaBtn");
		var downloadaW=document.querySelector(".downloadaW")
		var timer;
		// var downloadaBtn=document.querySelector("#downloadaBtn")
		

		//鼠标移入时登录界面显示
		download.onmouseover=function(){
			show();
		}
		//鼠标移出时登录界面延时消失
		download.onmouseout=function(){
			clearTimeout(timer);
			timer=setTimeout(function(){
				hideen();
			},500)
		}

		//鼠标移入登录界面时显示
		downloadaW.onmouseover=function(){
			clearTimeout(timer);
			show();
		}
		//鼠标移出登录界面时立即消失
		downloadaW.onmouseout=function(){
			clearTimeout(timer);
			timer=setTimeout(function(){
				hideen();
			},300)
		}
		function show(){
			downloadaBtn.style.display="block";
			downloadaW.style.display="block";
			downloada.style.background='url'+'('+'img1/icon.gif'+')'+' '+'0'+' '+'-77'+'px';
		}
		function hideen(){
			downloadaBtn.style.display="none";
			downloadaW.style.display="none";
			downloada.style.background='url'+'('+'img1/icon.gif'+')'+' '+'-52'+'px'+' '+'0';
		}
	}
}