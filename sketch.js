var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dropZone1,dropZone2,dropZone3,backgroundImg,background1;
var dropZone11,dropZone22,dropZone33
function preload()
{
	backgroundImg=loadImage("background1.jpg")
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png");
	
}

function setup() {
	createCanvas(800, 700);
	
	
	background1=createSprite(400,350,0,0);
	background1.addImage(backgroundImg);

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-15, width,30);
	groundSprite.shapeColor=color(255)

	dropZone11=createSprite(400,600,150,15);
	dropZone22=createSprite(466,565,15,85);
	dropZone33=createSprite(334,565,15,85);
	dropZone11.shapeColor="red";
	dropZone22.shapeColor="red";
	dropZone33.shapeColor="red";
	
	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.3, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	 //for dropZone
	 dropZone1=new DropZone(400,580,150,15);
	 dropZone2=new DropZone(466,565,15,85);
	 dropZone3=new DropZone(334,565,15,85);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  dropZone1.display();
  dropZone2.display();
  dropZone3.display();


  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
	Matter.Body.setStatic(packageBody,false);
	helicopterSprite.velocityX=5;
  }
}



