window.onload=function(){
	headImg();
	downloadFn();
	Img();
	//首页图片轮播
	function headImg(){
		var w1List=document.querySelector('#w1List');
		var alis=w1List.querySelectorAll('#w1List li');
		var prev=document.querySelector('.spic1a');
		var next=document.querySelector('.spic2a');
		var w1List2=document.querySelector('#w1List2');
		var lis=w1List2.querySelectorAll('li');
		var imgs=w1List2.querySelectorAll('img');
		var imgW=css(imgs[0],"width");
		var imgData=[
					"img1/banner0.jpg",
					"img1/banner1.jpg",
					"img1/banner2.jpg",
					"img1/banner3.jpg"
		];

		var now=0;
		var timer=0;
		for (var i = 0; i < alis.length; i++) {
			if (alis[i].className=="active") {
				now=i;
			};
			alis[i].index=i;
			//鼠标移入切换图片
			alis[i].onmouseover=function(){
				clearInterval(timer);
				var nex=this.index;
				if (nex>=imgData.length) {
					nex=0;
				};
				css(w1List2,"left",0);
				lis[0].children[0].src =  imgData[now];
				lis[1].children[0].src =  imgData[nex];
				mTween(w1List2,{left:-imgW},500,"easeBoth");
				alis[now].className = "";
				alis[nex].className="active";
				colorChange(nex);
				//section1.style.backgroundColor=color[nex];
				now = nex;
			}
			//鼠标移开
			alis[i].onmouseout=function(){
					settime();
				}
			
			
		};
		// 上一张点击切换图片
		prev.onclick=function(){clearInterval(timer);
			var nex=now-1;
			if (nex<0) {
				nex=imgData.length-1;
			};
			css(w1List2,"left",-imgW);
			lis[1].children[0].src =  imgData[now];
			lis[0].children[0].src =  imgData[nex];console.log(now,nex)
			mTween(w1List2,{left:0},500,"easeBoth");
			alis[now].className = "";
			alis[nex].className="active";
			colorChange(nex);
			// section1.style.backgroundColor=color[nex];
			now = nex;
		}

		// 下一张点击切换图片
		next.onclick=function(){
			var nex=now+1;
			if (nex>=imgData.length) {
				nex=0;
			};
			css(w1List2,"left",0);
			lis[0].children[0].src =  imgData[now];
			lis[1].children[0].src =  imgData[nex];
			mTween(w1List2,{left:-imgW},500,"easeBoth");
			alis[now].className = "";
			alis[nex].className="active";
			colorChange(nex);
			// section1.style.backgroundColor=color[nex];
			now = nex;
		}
		prev.onmouseover=next.onmouseover=function(){
			clearInterval(timer);
		}
		prev.onmouseout=next.onmouseout=function(){
			settime();
		}
		// next.onmouseover=function(){
		// 	clearInterval(timer);
		// }

		//首页图片自动轮播
		 settime();
		 function settime(){
			clearInterval(timer);
			timer=setInterval(function(){
				var nex=now+1;
				if (nex>=imgData.length) {
					nex=0;
				};
				css(w1List2,"left",0);
				lis[0].children[0].src =  imgData[now];
				lis[1].children[0].src =  imgData[nex];
				mTween(w1List2,{left:-imgW},500,"easeBoth");
				alis[now].className = "";
				alis[nex].className="active";
				colorChange(nex);
				// section1.style.backgroundColor=color[nex];
				now = nex;
			},3000);
		}


	}
	//图片切换后背景颜色切换
	function colorChange(obj){
		var color=[
					"#81a69e",//0
					"#a49fa3",//1
					"#000",//2
					"#4c0000"//3
		];
		var section1=document.querySelector('.section1');
		var timer0=null;
		clearTimeout(timer0);
		timer=setTimeout(function(){
		section1.style.backgroundColor=color[obj];
		},200)
	}

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
//首页图片效果.....................................................................//
	//.................图片遮罩........................................................//	
	function Img() {
		var bo=document.getElementsByClassName('bo');
		var mask=document.getElementsByClassName('mask');
		for (var i = 0; i<bo.length; i++) {
			bo[i].index=i; 
			bo[i].onmouseover=function(){
				for (var i = 0; i< mask.length; i++) {
					mask[this.index].style.height=140+"px";
				}
			}
		}

		for (var i = 0; i<bo.length; i++) {
			bo[i].index=i; 
			bo[i].onmouseout=function(){	
				for (var i = 0; i< mask.length; i++) {
					mask[this.index].style.height=27+"px";
				}
			}
		}

	}
	//.................图片遮罩........................................................//	
//首页图片效果.....................................................................//

	
}