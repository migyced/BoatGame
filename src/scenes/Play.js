class Play extends Phaser.Scene{
    constructor(){
        super("playScene");
    }

    create(){
        console.log("PlayScene");
        game.config.setBackgroundColor('#ffb9b9');
    }

    update(){

    }
}