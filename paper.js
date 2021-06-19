class Paper {
    constructor(x,y,radius){
        var options={
            restitution:0.1,
            frcition:0 ,
            density:1.0
        }
        this.radius=radius
        this.body=Bodies.circle(x,y,this.radius,options)
        this.image=loadImage("paper.png");
         World.add(world,this.body);
    }
    display(){

         push()
         angleMode(RADIANS)
         imageMode(CENTER)
         image(this.image,200,590);
         pop()
			
        }

    }
    
    
