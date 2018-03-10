{
	let images=document.querySelectorAll(".imgbox li");
	let pagers=document.querySelectorAll(".pagerbox li");
	
	let banner=document.querySelector("#banner");
	let  next=document.querySelector(".next");
	let  prev=document.querySelector(".prev");
	// console.log(images);
	// console.log(pagers);
	pagers.forEach(function(ele,index){
		ele.onclick=function(){
			for( let i=0;i<images.length;i++){
			images[i].classList.remove("active");
		    pagers[i].classList.remove("active");
		}
		this.classList.add("active");
		images[index].classList.add("active");
		
		n=index;
	}
	})

     let n=0;
     let t=setInterval(move,1000);
 	 function move(){
	n++;
	if(n===images.length){
		n=0;
	}
	if(n<0){
		n=images.length-1;
	}
	for( let i=0;i<images.length;i++){
			images[i].classList.remove("active");
		    pagers[i].classList.remove("active");
		}
		images[n].classList.add("active");
		pagers[n].classList.add("active");
		
	}

	banner.onmouseenter=function(){
		clearInterval(t)
	}
	banner.onmouseleave=function(){
		t=setInterval(move,1000);
	}
	let flag=true;
	next.onclick=function(){
		if(flag){
			flag=false;
			move();
		}
	
	}
	prev.onclick=function(){
		
		
		if(flag){
			n-=2;
			flag=false;
			move();
		}
	
	}
	//transitionend
	//addEventListener
	images.forEach(function(ele,index){
	ele.addEventListener("transitionend",function(){
	flag=true;
	})
	})
}

//Mingxing
{
	let prev=document.querySelector(".btn1");
	let next=document.querySelector(".btn2");
	let ineer=document.querySelector(".ming-right");
	let n=0;
	next.onclick=function(){
	n++;


	prev.classList.remove("disable");
	console.log(this);
	if(n===2){
		this.classList.add("disable");
		console.log(this);
	}
	if(n===3){
		n=2;
		return;
	}
	ineer.style.marginLeft=-992*n+"px";
	}
	prev.onclick=function(){
		n--;
		next.classList.remove("disable");
		if(n===0){
		this.classList.add("disable");
	}
	if(n===-1){
		n=0;
		return;
	}
	ineer.style.marginLeft=-992*n+"px";
	}
}

//内容
{
	
	
	const   cons=document.querySelectorAll(".jd_zhineng");
	console.log(cons);
	
	// console.log(up);
	// console.log(down);
	
	
	
	function coo(parent){
		const up=parent.querySelectorAll(".dapei_right h2 ");
		const down=parent.querySelectorAll(".zhineng_right ");
		up.forEach(function(ele,index){
		ele.onmouseenter=function(){
			for( let i=0;i<up.length;i++){
			up[i].classList.remove("active");
		    down[i].classList.remove("active");
		 
		}
		this.classList.add("active");
		down[index].classList.add("active");
	}
	})
	}
		cons.forEach(function(ele){
			
				coo(ele);	
			
			})	
}
//haha
{
 
	
	
	let totle=document.querySelectorAll(".nnv_totle");
	let n=0;
	
	let obj;
	function whill(parent){
		
		
		let inv=parent.querySelector(".content_i ");
		let len=parent.querySelectorAll(".content_i .nerong_item");
		let left=parent.querySelector(".nav_prev");
   		let right=parent.querySelector(".nav_next");
   		let dotted=parent.querySelectorAll(".sangedian li");

	right.onclick=function(ele,index){
		let l=len.length;
		n++;
		if(n===l){
			n--;
			return;
		}		
		inv.style.marginLeft=-307*n+"px";		
		dotted[n].classList.add("active");
		dotted[n-1].classList.remove("active");
		obj=dotted[n];
		}
		console.log(inv.length);
	
				
		
			dotted.forEach(function(ele,index){
				ele.onclick=function(){
				obj=dotted[n];
				obj.classList.remove("active");
				ele.classList.add("active");
				obj=ele;
				inv.style.marginLeft=-296*index+"px";
				n=index;

			}		
		})
			
		
			
	left.onclick=function(ele,index){
		n--;
		if(n<0){
			n=0;
			return;
		}		
		inv.style.marginLeft=-307*n+"px";		
		dotted[n].classList.add("active");
		dotted[n+1].classList.remove("active");	
	}	
	}	
	totle.forEach(function(ele){
	whill(ele);
    })	
}

//weinituijian
{
	let pre=document.querySelector(".btn4");
	let nex=document.querySelector(".btn5");
	let inee=document.querySelector(".tuij_bottom");
	let n=0;
	nex.onclick=function(){
	n++;


	pre.classList.remove("disable");
	console.log(this);
	if(n===2){
		this.classList.add("disable");
		console.log(this);
	}
	if(n===3){
		n=2;
		return;
	}
	inee.style.marginLeft=-1226*n+"px";
	}
	pre.onclick=function(){
		n--;
		nex.classList.remove("disable");
		if(n===0){
		this.classList.add("disable");
	}
	if(n===-1){
		n=0;
		return;
	}
	inee.style.marginLeft=-1226*n+"px";
	}
}



{

	let lab=document.querySelectorAll(".banner_nav li");
	let me=document.querySelectorAll(".me");
	console.log(lab);
	console.log(me);

	let obj=me[0];
	lab.forEach(function(ele,index){
			ele.onmouseenter=function(){
				obj.style.display="none";
				me[index].style.display="block";
				me[index].style.opacity="1";
				me[index].style.background="#ff6700";
				obj=me[index];
				console.log(obj)
			}
			ele.onmouseleave=function(){
				me[index].style.display="none";
			}
	})

}

{
	
	let box=document.querySelector(".daohang");
	let top=document.querySelector(".daohang_wenzi");
	let bbottom=document.querySelector("#bbottom");
	top.onmouseenter=function(){
		bbottom.style.height="300px";
	 bbottom.style.display="block";
	}
	box.onmouseleave=function(){
		bbottom.style.display="none";
		bbottom.style.height="0";
		
	}
}

//dahang
{

	const mosh=document.querySelectorAll("#bbottom");

	console.log(mosh);
	// console.log(down);
	
	
	
	function mouse(parent){
		const tit=document.querySelectorAll(".daohang_wenzi span");
		const change=parent.querySelectorAll(".bbottom_item ");
		const  img=parent.querySelectorAll("img ");
		console.log(img);
		tit.forEach(function(ele,index){
		ele.onmouseenter=function(){
			for( let i=0;i<tit.length;i++){
			tit[i].classList.remove("active");
		     change.forEach(function(ele){
			ele.classList.remove("active");
		     })
		     img.forEach(function(ele){
			ele.classList.remove("active");
		})
		    
		 
		}

		this.classList.add("active");
		change.forEach(function(ele){
			ele.classList.add("active");
		     })
		ele.classList.add("active");
		img.forEach(function(ele){
			ele.classList.add("active");
		})
		console.log(mosh[index]);
	}
	})
	}
		mosh.forEach(function(ele,index){
			
				mouse(ele);	
			
			})	
}