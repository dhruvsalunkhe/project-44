var gameState=0;
var player;
var game;
var ground;

function setup() {
  createCanvas(windowWidth,windowHeight);
  player = new Player(100,windowHeight-50);
  ground = createSprite(windowWidth/2,windowHeight-20,windowWidth,20);
  game = new Game();
}

function draw() {
  background(255,255,255); 
  if(gameState === 0){
    game.start();
  }

  if(gameState === 1){
    game.play();
  }

  if(gameState === 2){
    game.end();
  }
  drawSprites();
}