	var container=document.querySelector('.container');
		
		var target=document.getElementsByTagName('ul')[0];
		var card=document.querySelector(".card");
	
		var tab=['Javascript','XML','Angular'];
		
		for(var i=0; i<tab.length; i++){
			target.innerHTML+='<li class="ico-cog">'+tab[i]+'</li>';
			container.style.display="block";

		}
		var iconCog=document.getElementsByTagName('li')[0];
		var icoHeart=document.getElementsByTagName('li')[1];
		var icoStar=document.getElementsByTagName('li')[2];
		var msg=document.getElementsByTagName('p')[0];
		
		icoHeart.classList.add('ico-heart');
		icoStar.classList.add('ico-star');
		//event
		iconCog.addEventListener('click',function(){
			card.classList.add('card-display');
			msg.textContent="Javascript est un langage né en 1995. L'auteur est Brandan Heich...";
		});
//Angular.js La popularité du framework JavaScript ne cesse de croitre. Quelles sont ses véritables points forts comparés à ses concurrents ?
		icoHeart.addEventListener('click',function(){
			card.classList.add('card-display');
			msg.textContent="L'Extensible Markup Language (XML, « langage de balisage extensible » en français) est un métalangage informatique de balisage générique qui dérive du ...";
		});

		icoStar.addEventListener('click',function(){
			card.classList.add('card-display');
			msg.textContent="Angular.js La popularité du framework JavaScript ne cesse de croitre. Quelles sont ses véritables points forts comparés à ses concurrents...";
		});

		




		//console.log(parseInt(tab,10));
		var arr = { "un" : 1, "deux" : 2, "trois": 3 };  
				for(var key in arr)
				{
				  var value = arr[key];
				  console.log(key + " = " + value +",");
				}