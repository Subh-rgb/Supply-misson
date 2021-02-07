var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var box1 , box2 , box3;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{

	helicopterIMG=loadImage("helicopter.png");
	packageIMG=loadImage("package.png");
}

function setup() {
	createCanvas(800, 700);


	rectMode(CENTER);
	
	
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.2;

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale=0.6;

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(59, 54, 54);

	var boxOptions = {isStatic:true};

	box1 = createSprite(410,635,228.5,50);
	box1 = Bodies.rectangle(410,635,228.5,50,boxOptions);
	World.add(world, box1);

	box2 = createSprite(320,555,50,200);
	box2 = Bodies.rectangle(320,555,50,200,boxOptions);
	World.add(world, box2);
	
	box3 = createSprite(500,555,50,200);
	box3 = Bodies.rectangle(500,555,50,200,boxOptions);
	World.add(world, box3);

	engine = Engine.create();
	
	world = engine.world;

	var package_object = {restitution:0.4, isStatic:true};

	packageBody = Bodies.circle(width/2 , 200 , 5 ,package_object);
	World.add(world, packageBody);

	var static_object = {isStatic:true};

	ground = Bodies.rectangle(width/2, 650, width, 10 ,static_object);
 	World.add(world, ground);

	Engine.run(engine);
  

}


function draw() {

	//Place objects in center
	rectMode(CENTER);

	//Clear the screen
	background(100, 178, 209);

	//Make the package sprite position as package object position
	packageSprite.x= packageBody.position.x;
	packageSprite.y= packageBody.position.y; 


	//Display sprites on screen
	drawSprites();
 
}

function keyPressed() {

	if (keyCode === LEFT_ARROW) {

		//Move in left direction
		helicopterSprite.x = helicopterSprite.x - 20;

		//Translation acts as Vector - A vector is an object that has both a magnitude and a direction.
		translation={x:-20,y:0}; 

		//Moves a body by a given vector relative to its current position, without imparting any velocity.
    	Matter.Body.translate(packageBody, translation);
	}

	if (keyCode === RIGHT_ARROW) {

		//Move in right direction
		helicopterSprite.x = helicopterSprite.x + 20;

		//Translation acts as Vector - A vector is an object that has both a magnitude and a direction.
		translation={x:20,y:0}; 

		//Moves a body by a given vector relative to its current position, without imparting any velocity.
    	Matter.Body.translate(packageBody, translation);
	}

	if (keyCode === DOWN_ARROW) {

		//Sets the body as static, including isStatic flag and setting mass and inertia to Infinity.
		Matter.Body.setStatic(packageBody,false);
	}
}



