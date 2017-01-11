
function zhuce_denglu(){
	/*
		user.php?act=xxx&user=用户名&pass=密码
			act:
				add——注册用户
				login——登陆
		
		注册：
			user.php?act=add&user=松松&pass=123456  -> {error: 0, desc: 文字描述信息}
		登录:
			user.php?act=login&user=松松&pass=123456 -> 
			{error: 0, desc: 文字描述信息}
				
	*/
	var $adduser = $('#add_user');
	var $addpass = $('#add_pass');
	var $surepass = $('#sure_pass');
	var Judge=null;
	
	//向后台请求数据并验证注册用户的注册名是否已经被注册
	$adduser.on('blur',function(){
		var val = $(this).val();
		$.ajax({
			url:'user_view.php',
			dataType:'xml',
			success:function(str){
				var name = $(str).find('.name');
				name.onOff = true;
				name.each(function(i,e){

					if($(e).text() === val){
						tishiFn('#senfe1','该用户名已被注册!!','#add_user','#add_pass');
						//alert('用户名已被注册');
						$adduser.css('color','red');
						name.onOff = false;
						return;
					}
				});
				
				if(name.onOff){
					$adduser.css('color','green');
				}
			},
			error:function(){
				$adduser.css('color','green');
				
			}
		});
	});
	//向后台请求数据并验证注册用户输入的注册密码是否前后一致
	$surepass.on('blur',function(){
		var val = $(this).val();
		var val1 = $addpass.val();
		
		if(val1 === val){
			$addpass.css('color','green');
			$surepass.css('color','green');
			var Judge=true;
		}else{
			$surepass.css('color','red');
			tishiFn('#senfe1','注册密码前后不一致!!',null,null,'#sure_pass');
			var Judge=false;
			//return false;
		}
	})

	//验证成功后向后台发送注册用户信息
	$('#add_btn').click(function(){
		var userVal = $adduser.val();
		var passVal = $addpass.val();
		var passVal2 = $surepass.val();

		if(userVal && passVal && passVal2){
			ajax({
				url:'user.php',
				data:{
					act:'add',
					user:userVal,
					pass:passVal
				},
				succ:function(json){
					if(json.error){

						tishiFn('#senfe1','该用户已被注册！！','#add_user','#add_pass','#sure_pass');
						//alert('跟你说了不能注册，想死呀！')
						$('#add_user').val('');
						$('#add_pass').val('');
					}else{
						tishiFn('#senfe1','注册成功！！','#add_user','#add_pass','#sure_pass');
						//alert(json.desc);
					}
				}
			});
		}else{
			tishiFn('#senfe1',"请填写完整!!",'#add_user','#add_pass','#sure_pass');
			//alert('请填写完整!!!');
			$('#add_user').val('');
			$('#add_pass').val('');
		}
	});
//})

	//已注册用户开始登录
	$('#login_btn').click(function(){
		var $login_user = $('#login_user').val();
		var $login_pass = $('#login_pass').val(); 
		
		if($login_user && $login_pass){
			ajax({
				url:'user.php',
				data:{
					act:'login',
					user:$login_user,
					pass:$login_pass
				},
				succ:function(json){
					if(json.error){
						
				/*......................................................................*/
				//弹出输入错误提示框
						$('#senfe2').show();
						window=tip();
						function tip(){
							var n=2;//设定时间
							senfe();	
							function senfe(){
								var spanT=document.querySelectorAll('span');
								if(n+1>0){
									
									//document.title="本页将在" + n + "秒后跳转到百度首页！";
									//页面提示
									document.getElementById('senfe2').innerHTML="密码错误！请在<span style=\"color:red;\">" + n + "</span>秒后重新输入！";
									n--;
									setTimeout(senfe,1000);
								}else{
									$('#senfe2').hide();
									$('#login_user').val('');
									$('#login_pass').val('');
								}
							}
						}
				/*......................................................................*/ 
						//alert(json.desc);
					}else{
						//alert('马上起飞!!!');
						$('#login_user').val('');
						$('#login_pass').val('');
						
		
			/*......................................................................*/
			//弹出输入正确提示框
			
					$('#senfe2').show();
					window=tip();
					function tip(){
						var n=5;//设定时间
						senfe();	
						function senfe(){
							var spanT=document.querySelectorAll('span');
							if(n+1>0){
								
								//document.title="本页将在" + n + "秒后跳转到百度首页！";
								//页面提示
								document.getElementById('senfe2').innerHTML="登录成功！本页将在<span style=\"color:red;\">" + n + "</span>秒后跳转到首页！";
								n--;
								setTimeout(senfe,1000);
							}else{
								
								window.location.href="index.html";
								

							}
						}
					}
			/*......................................................................*/ 
						
					}
				}
			});
		}else{
			tishiFn('#senfe2',"请填写完整!!",'#login_user','#login_pass',null);
			//alert('请填写完整!!!');
		}
	});



function tishiFn(id,str,id1,id2,id3){
	$(id).show();
	window=tip();
	function tip(){
		var n=2;//设定时间
		senfe();	
		function senfe(){
			var spanT=document.querySelectorAll('span');
			if(n+1>0){
				document.querySelector(id).innerHTML=str;
				n--;
				setTimeout(senfe,1000);
			}else{
				$(id).hide();
				$(id1).val('');
				$(id2).val('');
				$(id3).val('');
			}
		}
	}
}


}
