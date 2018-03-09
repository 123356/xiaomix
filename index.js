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
			for(i=0;i<cons.length;i++){
				coo(ele);	
			}
			})	
}
//haha
{
let p=document.querySelector(".nav_prev");
	let nn=document.querySelector(".nav_next");
	let i=document.querySelector(".content_i");
	console.log(i);
	// console.log(p);
	// console.log(nex);

	let n=0;
	nn.onclick=function(){
		n++;
		i.style.marginLeft=-307*n+"px";	
		if(n===nn.length-1){
		return;
		}
	
		}
	
	p.onclick=function(){
		n++;
		i.style.marginLeft=-307*n+"px";
	while(n===nn.length-1){
		
		return;
		}
		
	
	}
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