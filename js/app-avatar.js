	var container=document.querySelector('.container');
		
		var target=document.getElementsByTagName('ul')[0];
		var card=document.querySelector(".card");
	
		
		 container.style.display="block";
		

		//console.log(parseInt(tab,10));
		var arr = { 
					"images/1410286517_google-plus.png" : "Google", 
					"images/1410286557_facebook.png" : "Facebook", 
					"images/1410288902_twitter.png": "Twitter",
					"images/1410288927_email.png" : "E-mail"
					};
					
				for(var key in arr)
					{
					  var value = arr[key];
					  target.innerHTML+='<li><div class="avatar"><img src='+key+'></div><div class="caption">'+value+'</div></li>';

					  console.log(value);

					}