const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var stand1, stand2;

function preload() {

}

function setup() {
  createCanvas(1500,600);

  engine = Engine.create();
  world = engine.world;
  
    ground = new Ground(width/2, 590, width, 20)
    stand1 = new Ground(550,500,300,15);
    stand2 = new Ground(1000,370,250,15);
    block1 = new Block(460,470,35,50);
    block2 = new Block(490,470,35,50);
    block3 = new Block(520,470,35,50);
    block4 = new Block(550,470,35,50);
    block5 = new Block(580,470,35,50);
    block6 = new Block(610,470,35,50);
    block7 = new Block(640,470,35,50);
    block8 = new Block(490,430,35,50);
    block9 = new Block(520,430,35,50);
    block10 = new Block(550,430,35,50);
    block11 = new Block(580,430,35,50);
    block12 = new Block(610,430,35,50);
    block13 = new Block(520,388,35,50);
    block14 = new Block(550,388,35,50);
    block15 = new Block(580,388,35,50);
    block16 = new Block(550,340,35,50);
    block17 = new Block(940,340,35,50);
    block18 = new Block(970,340,35,50);
    block19 = new Block(1000,340,35,50);
    block20 = new Block(1030,340,35,50);
    block21 = new Block(1060,340,35,50);
    block22 = new Block(970,300,35,50);
    block23 = new Block(1000,300,35,50);
    block24 = new Block(1030,300,35,50);
    block25 = new Block(1000,260,35,50);
    player = new Polygon(100,350,25);
    chain = new Chain(player.body,{x:100, y:350});

  Engine.run(engine);

}


function draw() {
  background(56,44,44);
  Engine.update(engine);

  stand1.display();
  stand2.display();
  fill("lightgrey")
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("red")
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("cyan")
  block13.display();
  block14.display();
  block15.display();
  fill("black")
  block16.display();
  fill("turquoise")
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  fill("green")
  block22.display();
  block23.display();
  block24.display();
  fill("yellow")
  block25.display();
  ground.display();
  player.display();
  chain.display();

  drawSprites();
  fill(255);
  textFont("Arial");
  textSize(20);
  text("Drag the Hexagonal Stone and Release it to launch it towards the blocks",200,50)
  text("Press space to get another chance to shoot!",200,200)
}

function mouseDragged() {
  Matter.Body.setPosition(player.body, {x: mouseX , y: mouseY});
}

function mouseReleased() {
  chain.fly();
}

function keyPressed() {
  if(keyCode === 32) {
      chain.attach(player.body);
  }
}