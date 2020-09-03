
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var  bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;

function preload()
{
	
}

function setup() {
	createCanvas(800,800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

	bobObject1=new Bob(140,600,120,120);
	bobObject2=new Bob(280,600,120,120);
	bobObject3=new Bob(420,600,120,120);
	bobObject4=new Bob(560,600,120,120);
	bobObject5=new Bob(700,600,120,120);

	roofObject = new Rope(400,200,700,100);

	rope1=new Rope(bobObject1.body,roofObject.body,bobDiameter*2,0);
}


function draw() {
  rectMode(CENTER);
  background(0);

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  roofoObject.display();

  rope1.dsplay();
  
  
  drawSprites();
 
}



