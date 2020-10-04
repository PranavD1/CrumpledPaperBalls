
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbin1, dustbin2, dustbin3;
var ground;
function preload()
{
	dustbin1 = createSprite(500, 650, 20, 200);
	dustbin2 = createSprite(410, 700, 200, 20);
	dustbin3 = createSprite(300, 650, 20, 200);
    
    
}

function setup() {
	createCanvas(800, 700);

	 ground = new Ground(400,650,700,30)

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ground = new Ground(400,700,700,150);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground.display();
  
  drawSprites();
 
}



