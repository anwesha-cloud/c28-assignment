const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var platform1,platform2;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,
    box11,box12,box13,box14,box15,box16,box17,box18,box19,box20;
var projectile,slingshot;

function setup() {
 var canvas= createCanvas(800,400);
 background("black");

  engine = Engine.create();
  world = engine.world;

  platform1 = new Floor(650,360,200,20)
  platform2 = new Floor(650,200,200,20)

  ground=new Ground(400,395,800,15)

  box1 = new Box(635,198,35,35)
  box2 = new Box(645,198,35,35)
  box3 = new Box(655,198,35,35)
  box4 = new Box(665,198,35,35)
  box5 = new Box(650,179,35,35)
  box6 = new Box(653,179,35,35)
  box7 = new Box(659,179,35,35)
  box8 = new Box(655,160,35,35)
  box9 = new Box(658,160,35,35)
  box10 = new Box(656,141,35,35)

  box11 = new Box(635,359,35,35)
  box12 = new Box(645,359,35,35)
  box13 = new Box(655,359,35,35)
  box14 = new Box(665,359,35,35)
  box15 = new Box(650,340,35,35)
  box16 = new Box(653,340,35,35)
  box17 = new Box(659,340,35,35)
  box18 = new Box(655,321,35,35)
  box19 = new Box(658,321,35,35)
  box20 = new Box(656,302,35,35)

  projectile= new Projectile(200,300,40,40)
  slingshot= new Slingshot(projectile.body,{x:200,y:300});

}

function draw() {
  background(0);  
  Engine.update(engine);

  platform1.display();
  platform2.display();
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();

  projectile.display();
  slingshot.display();

}

function mouseDragged(){
  Matter.Body.setPosition(projectile.body,{x:mouseX,y:mouseY})
  }
  
  function mouseReleased(){
   slingshot.fly()   
  }
  function keyPressed(){
    if(keyCode===32){
        slingshot.attach(projectile.body)
    }
    }