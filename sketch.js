



const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



	
function setup() {
	var  paperSprite, dustbinSprite
    
	createCanvas(800, 700);
	rectMode(CENTER);
	

	
	

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	
	//Create a Ground
	groundSprite = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, groundSprite);


	Engine.run(engine);
    
	dustbin1 = new Dustbin(390,615,100,100);
	paper1 = new Paper(100,400,20)
	
  
}


function draw() {
  rectMode(CENTER);
  background(160);
  
  drawSprites();
  dustbin1.display();
  paper1.display();
}


