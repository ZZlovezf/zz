function MyPlane(){
		if(!MyPlane.chace){
			MyPlane.chace={
				div:document.createElement("div"),
				init:function(){
					
					this.div.className="my-warplain"
					new Engine().body.appendChild(this.div)
					this.left(( new Engine().width()-this.width())/2)
					this.top(new Engine().height()-this.height())
					this.fire()
					return this
				},
				move:function(){
					new Engine().body.onmousemove=function(e){
						var e=e||event
						var x=e.pageX-new Engine().left()-this.width()/2;
						var maxL= new Engine().width()-this.width()
						x=x<0?0:x>maxL?maxL:x;
						this.left(x);
						var y=e.pageY-new Engine().top()-this.height()/2;
						var maxT= new Engine().height()-this.height()
						y=y<0?0:y>maxT?maxT:y;
						this.top(y);
						
					}.bind(this)
				},
				fire:function(){
					this.timer=setInterval(function(){
						new Bullet().init().move()
					},40)
					
				},
				width:function(){
					return this.div.offsetWidth;
				},
				height:function(){
					return this.div.offsetHeight;
				},
				left:function(val){
					if(val||val==0){
						this.div.style.left=val+"px"
					}
					return this.div.offsetLeft;
				},
				top:function(val){
					if(val||val==0){
						this.div.style.top=val+"px"
					}
					return this.div.offsetTop;
				}
			}
		}
		return MyPlane.chace
	}