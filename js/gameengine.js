function Engine(){
	if(!Engine.chace){
		Engine.chace={
			body:$id("main"),
			oUl:$id("options"),
			level:0,
			eny:null,
			init:function(){
				this.oUl.onclick=function(e){
					var e=e||event;
					var target=e.target||e.srcElement;
					if(target.nodeName=="LI"){
						this.level=target.getAttribute("level");
						this.oUl.remove()
						this.start();
					}
					
				}.bind(this)
			},
			start:function(){
				var logo=document.createElement("div");
				this.body.appendChild(logo);
				logo.className="logo";
				var loading=document.createElement("div");
				this.body.appendChild(loading);
				loading.className="loading";
				var index=0;
				var timer=setInterval(function(){
					index++
					loading.style.backgroundImage="url(images/loading"+index+".png)";
					if(index==3){
						index=0;
					}
				},500)
				setTimeout(function(){
					logo.remove();
					loading.remove();
					clearInterval(timer);
					this.gameStart();
				}.bind(this),2000)
			},
			gameStart:function(){
				new MyPlane().init().move()
				this.eny=new Enmey().init().move()
			},
			width:function(){
					return this.body.offsetWidth;
			},
			height:function(){
				return this.body.offsetHeight;
			},
			left:function(val){
				if(val||val==0){
					this.body.style.left=val+"px"
				}
				return this.body.offsetLeft;
			},
			top:function(val){
				if(val||val==0){
					this.body.style.top=val+"px"
				}
				return this.body.offsetTop;
			}
			
		}
	}
	return Engine.chace
}
