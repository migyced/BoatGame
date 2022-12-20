class Load extends Phaser.Scene{
    constructor(){
        super("loadScene");
    }

    create(){
        console.log("loadScene");
        game.config.setBackgroundColor('#f4fdaf');
    }

    update(){
        
    }
}