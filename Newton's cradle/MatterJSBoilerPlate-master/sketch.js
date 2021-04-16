
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;



function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	roof1=new roof(200,100,275,20);

	paper1=new paper(110,300,35)
	paper2=new paper(150,300,35)
	paper3=new paper(190,300,35)
	paper4=new paper(230,300,35)
	paper5=new paper(270,300,35)


	sling1=new SlingShot(paper1.paper,{x:100,y:100});
	sling2=new SlingShot(paper2.paper,{x:120,y:100});
	sling3=new SlingShot(paper3.paper,{x:170,y:100});
	sling4=new SlingShot(paper4.paper,{x:200,y:100});
	sling5=new SlingShot(paper5.paper,{x:250,y:100});


	Engine.run(engine);
  
}


function draw() {
	Engine.update(engine);
  
  background(255);

  roof1.display();

  paper1.display();
  paper2.display();
  paper3.display();
  paper4.display();
  paper5.display();


  sling1.display();
  sling2.display();
  sling3.display();
  sling4.display();
  sling5.display();
  
  
 
}



