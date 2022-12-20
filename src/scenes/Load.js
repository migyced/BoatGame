class Load extends Phaser.Scene{
    constructor(){
        super("loadScene");
    }

    preload(){
        this.load.image('boat', './assets/boat.png');
    }

    create(){
        console.log("loadScene");
        game.config.setBackgroundColor('#f4fdaf');
    }
}