class Drops {
    constructor(x,y){
        var options = {
            isStatic:false,
            friction: 0.1,
        }
        this.x=x;
        this.y=y;
        this.r=5;
        this.body = Bodies.circle(this.x, this.y, this.r, options);
        console.log("constructor" + y);
        World.add(world, this.body);
    }
    display() {
        if(this.body.position.y > 800) { 
            this.Body.position.y=0;
            this.y=0;
		}
        var pos = this.body.position;
        console.log("display" + pos.y);

        fill("blue");
        ellipseMode(CENTER);
        ellipse(pos.x,pos.y,this.r,this.r);
        
    }
}