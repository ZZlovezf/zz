function Bullet(){
	this.div=document.createElement("div");
	this.init=function(){
		
		this.div.className="bullet";
		new Engine().body.appendChild(this.div);
		this.top(new MyPlane().top()-this.height());
		var mp=new MyPlane()
		this.left(mp.left() + mp.width() / 2 - this.width() / 2);
		return this
	}
	this.move=function(){
		this.timer=setInterval(function(){
			this.top(this.top()-9)
			if(this.top()<0){
				this.div.remove()
				clearInterval(this.timer)
			}
			if(pz(this.div,new Engine().eny.div)){
				new Engine().eny.div.className="bullet_die"
				clearInterval(new MyPlane().timer)
				setTimeout(function(){
					new MyPlane().div.remove()
					var mask=document.createElement("div")
					new Engine().body.appendChild(mask)
					mask.style.display="block"
					mask.innerHTML="GAME OVER"
					mask.className="cover";
					
					
				},1000)
				
			}
		}.bind(this),30)
	}
	this.width=function(){
		return this.div.offsetWidth;
	}
	this.height=function(){
		return this.div.offsetHeight;
	}
	this.left=function(val){
		if(val||val==0){
			this.div.style.left=val+"px"
		}
		return this.div.offsetLeft;
	}
	this.top=function(val){
		if(val||val==0){
			this.div.style.top=val+"px"
		}
		return this.div.offsetTop;
	}
}
