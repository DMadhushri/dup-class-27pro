const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var roof;

function preload()
{
	
}

function setup() {
	createCanvas(1200,400);
    

	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);

	roof = new roof(600,height,1200,50);


  
}


function draw() {
  rectMode(CENTER);
  background(0);
   roof.display();
  drawSprites();
 
}



