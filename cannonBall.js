class CannonBall{
 constructor(x,y){
 var options={
    isStatic:true
 }
 this.r=30;
 this.body=Bodies.circle(x,y,this.r,options);
 World.add(world,this.body);
 this.image=loadImage("./assets/cannonball.png");
 }  

 shoot(){
    var newAngle = cannon.angle*PI/180-0.5;
    var velocity = p5.Vector.fromAngle(newAngle);
    velocity.mult(0.4);
    Matter.Body.setStatic(this.body,false); 
    Matter.Body.setVelocity(this.body,{ 
      x: velocity.x * 180/PI, y: velocity.y * 180/PI });
   
 }

 remove(index){

 Matter.Body.setVelocity(this.body,{x:0,y:0})
 setTimeout(()=>{
   Matter.World.remove(world,this.body);
   delete balls[index];
 },1000);

 }

 display(){
    var pos=this.body.position;

    push();
    imageMode(CENTER);
    image(this.image,pos.x,pos.y,this.r,this.r);
    pop();
 } 
}

