class Ground{
constructor(x,y,width,height){
this.body = Bodies.rectangle(x,y,width,height)
var options ={
 isStatic: true


}
World.add(world, this.body);
}
  

display(){
var pos = this.body.position;

this.body.Bodies.rectangle(400,650,700,150,options)
fill("blue");
rect (pos.x,pos.y,this.width, this.height);
}





}