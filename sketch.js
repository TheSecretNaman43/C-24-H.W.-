//Giving Nicknames
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

//Declaring Variables
var engine, world;
var paper1; 
var ground; 
var dustbin1, dustbin2, dustbin3; 

function setup() {
    createCanvas(800, 700);
    rectMode(CENTER);

    engine = Engine.create();
    world = engine.world;

    //Create Paper & Ground
    paper1 = new Paper(100,600, 10);
    ground = new Ground(400,680,800,20);
	
	//Creating Dustbins
	dustbin1 = new Dustbin(610,660, 100, 20);
    dustbin2 = new Dustbin(550,620,20,100);
    dustbin3 = new Dustbin(670,620,20,100)
    
    Engine.run(engine);
  
}

function draw() {
  background(0);
  rectMode(CENTER);

  Engine.update(engine);
  
  //Displaying Paper & Ground
  paper1.display();
  ground.display();

  //DIsplaying Dustbin
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
}

function keyPressed(){
    if (keyCode === UP_ARROW ) {
      Matter.Body.applyForce(paper1.body, paper1.body.position, {x: 15,y: -15})
    }
  }