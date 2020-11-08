class Player {
    constructor(x,y){
        this.sprite = createSprite(x,y,20,20);
        this.sprite.velocityX = 7;
    }
    gravity(g){
        this.sprite.velocityY = this.sprite.velocityY + g;
    }
}