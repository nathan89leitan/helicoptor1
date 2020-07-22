class box {
    constructor(x,y){
        var options ={
'restitution':0.5,
'friction':2.9,
'density':0.8
        }
        this.body=Bodies.rectangle(x,y,50,50);
        this.image=loadImage("package.png");
        World.add(world,this.body);
    }
    display(){
var pos=this.body.position;
push();
imageMode(CENTER);
image(this.image,30,30,50,50);
pop();
    }
}