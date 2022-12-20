let config = {
    type: Phaser.CANVAS,
    width: 800 ,
    height: 800,
    backgroundColor: '#999999',
    scene: [Load, Play]
}

let game = new Phaser.Game(config);

let keyLEFT, keyRIGHT, keyDOWN, keyUP, keyCLICK;