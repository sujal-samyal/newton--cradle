
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
bob1 = new Bob(210,600,50)
bob2 = new Bob(310,600,50)
bob3 = new Bob(410,600,50)
bob4 = new Bob(510,600,50)
bob5 = new Bob(610,600,50)

roof = new Roof(400,150,500,40);

rope1 =new Rope(bob1.body,roof.body)
rope2 =new Rope(bob2.body,roof.body)
rope3 =new Rope(bob3.body,roof.body)
rope4 =new Rope(bob4.body,roof.body)
rope5 =new Rope(bob5.body,roof.body)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");
  
bob1.display()
bob2.display()
bob3.display()
bob4.display()
bob5.display()

roof.display()

rope1.display()
rope2.display()
rope3.display()
rope4.display()
rope5.display()
  drawSprites();
 
}



