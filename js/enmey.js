function Enmey(){
	this.div=document.createElement("div");
	this.init=function(){
		this.div.className="enemy-middle"
		new Engine().body.appendChild(this.div)
		this.left(rand(0,new Engine().width()-this.width()))
		return this
	}
	this.move=function(){
		this.timer=setInterval(function(){
			this.top(this.top()+9)
			if(this.top()>new Engine().height()){
				this.div.remove()
				clearInterval(this.timer)
			}
			
		}.bind(this),30)
		return this
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
