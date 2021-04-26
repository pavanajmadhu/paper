class Paper{
    constructor(x,y){
    
    var options = {
        'restitution':0.8,
        'friction':3,
        'density':1
    }
        this.box=Bodies.circle(x,y,40,options)
       
       this.image=loadImage("paper.png")
        World.add(world,this.box);
    }
    display(){
        var position=this.box.position;
        
    
        imageMode(CENTER);
    image(this.image,position.x,position.y,60,60);
    
       
    }
    
    }