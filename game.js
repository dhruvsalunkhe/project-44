class Game{
    constructor(){
        this.startButton = createSprite(width/2+200,height-200);
    }
    start(){
        textSize(30);
        textFont("Amsterdam");
        noStroke();
        fill("black");
        text ("Cut And Run",width/2,height/2-200);
        player.sprite.visible = false;
        ground.visible = false;
        text ("You are sage who is going to the capital to get a a job in the palace, on your way there ",width/2-750,height/2);
        text ("you meet the demon wolf who is a magical creature to save your life you have to race the castle as soon as possible",width/2-750,height/2+50);
        if(mousePressedOver(this.startButton)){
            gameState = 1;
        }
        }
    play(){
        player.sprite.visible = true;
        ground.visible = true;
        this.startButton.visible = false;
        camera.position.x = player.sprite.x;
        ground.x = camera.position.x; 
        if(keyIsDown (32)){
            player.sprite.velocityY = -20;    
        }
        player.gravity(0.6);
        player.sprite.collide(ground);
    }
    end(){}
}
