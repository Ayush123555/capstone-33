class Snow   {
 constructor(x,y,w,h) {
 var options={
     'restitution':1,
     'frictionAir':0.05
 }
this.body=Bodies.rectangle(x,y,w,h,options);
this.image=loadImage("snow4.webp");
this.w=w;
this.h=h;
World.add(world,this.body);
 }

display(){
 var pos=this.body.position;
 rectMode(CENTER)
rect(pos.x,pos.y,50,50);
    
}
}