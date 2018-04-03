{
	let imgs=document.querySelectorAll(".banner_img li");
	let pagers=document.querySelectorAll(".banner_dian li");
	let banner=document.querySelector("#banner");
	let prev=document.querySelector(".banner_lbtn");
	let next=document.querySelector(".banner_rbtn");

	pagers.forEach(function(ele,index){
		ele.onclick=function(){
			for(let i=0;i<pagers.length;i++){
				imgs[i].classList.remove("active");
				pagers[i].classList.remove("active");
			}
			this.classList.add("active");
			imgs[index].classList.add("active");
			n=index;
		}
	});

	let n=0;
	function move(){
		n++;
		if(n === imgs.length){
			n=0;
		}
		if(n<0){
			n=imgs.length-1;
		}
		for(let i=0;i<imgs.length;i++){
			imgs[i].classList.remove("active");
			pagers[i].classList.remove("active");
		}
		imgs[n].classList.add("active");
		pagers[n].classList.add("active");
	}
	let t=setInterval(move,2000);
	
	banner.onmouseenter=function(){
		clearInterval(t);
	};
	banner.onmouseleave=function(){
		t=setInterval(move, 3000);
	};


	let flag=true;
	next.onclick=function(){
		move();

		// if(flag){
		// 	flag=false;
		// 	move();
		// }
		
	};
	prev.onclick=function(){
		n-=2;
		move();
		// if(flag){
		// 	flag=false;
		// 	n-=2;
		// 	move();
		// }
	};
	// imgs.forEach(function(ele,index){
	// 	ele.addEventListener("transitionend", function(){
	// 		flag=true;
	// 	})
		
	// });
}	

//小米单品
{	
	function goods(parent){
		let prev=parent.querySelector(".prev");
		let next=parent.querySelector(".next");
		let inner=parent.querySelector(".star_con");

		let n=0;
		next.onclick=function(){
			n++;
			prev.classList.remove("disable");
			if(n===2){
				this.classList.add("disable");
			}
			if(n===3){
				n=2;
				return;
			}
			inner.style.marginLeft=-978*n+"px";
		}
		prev.onclick=function(){
			n--;
			next.classList.remove("disable");
			if(n===0){
				prev.classList.add("disable");

			}
			if(n===-1){
				n=0;
				return;
			}
			inner.style.marginLeft=-978*n+"px";
		}
	}
	let starList=document.querySelectorAll(".star");
	goods(starList[0]);
	goods(starList[1]);

}
//内容模块
{	
	function content(parent){

		let drs=parent.querySelectorAll(".jd_right span");
		let dcs=parent.querySelectorAll(".jd_content");
		drs.forEach(function(ele,index){
			ele.onclick=function(){
				for(let i=0;i<drs.length;i++){
					drs[i].classList.remove("active");
					dcs[i].classList.remove("active");
				}
				this.classList.add("active");
				dcs[index].classList.add("active");
			}
		});

	}
	let contentList=document.querySelectorAll(".cn");
	content(contentList[0]);
	content(contentList[1]);
	content(contentList[2]);
	content(contentList[3]);

}

// 图书模块
{	
	function list(parent){
		let contents=parent.querySelectorAll(".nr_bt");
		let pagers=parent.querySelectorAll(".nr_bt9");
		let ban=parent.querySelector(".nbb_nb");
		let prev=parent.querySelector(".nr_lbtn");
		let next=parent.querySelector(".nr_rbtn");

		let n=0;
		next.onclick=function(){
			n++;
			if(n===contents.length){
				n=contents.length-1;
				return;
			}
			ban.style.marginLeft=n*-296+"px";
			pagers[n-1].classList.remove("active");
			pagers[n].classList.add("active");
			obj=pagers[n];

		}

		prev.onclick=function(ele,index){
			n--;
			if(n<0){
				n=0;
				return;
			}
			ban.style.marginLeft=n*-296+"px";
			pagers[n+1].classList.remove("active");
			pagers[n].classList.add("active");
			obj=pagers[n];
		}

		let obj=pagers[0];
		pagers.forEach(function(ele,index){
			ele.onclick=function(){
				obj.classList.remove("active");
				ele.classList.add("active");
				obj=ele;
				n=index;
				ban.style.marginLeft=n*-296+"px";
			}

		})
	
	}
	var contentList=document.querySelectorAll(".nbb");
	list(contentList[0]);
	list(contentList[1]);
	list(contentList[2]);
	list(contentList[3]);

}
// 侧导航
{
	let labels=document.querySelectorAll(".banner_nav li");
	let menus=document.querySelectorAll(".banner_list");
	let obj=menus[0];
	labels.forEach(function(ele,index){
		ele.onmouseenter=function(){
			obj.style.display="none";
			menus[index].style.display="block";
			obj=menus[index];
		}
		ele.onmouseleave=function(){
			menus[index].style.display="none";
		}


	})
}
//导航
{
	let labels=document.querySelectorAll(".nav_wenzi a");
	let menus=document.querySelectorAll(".nav_list");
	let obj=menus[0];
	labels.forEach(function(ele,index){
		ele.onmouseenter=function(){
			// menus.style.height="300px";
			obj.style.display="none";
			menus[index].style.display="block";
			obj=menus[index];
			
		}
		ele.onmouseleave=function(){
			menus[index].style.display="none";
			// menus.style.height="0px";
		}


	})
}