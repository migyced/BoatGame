const { Phaser } = require("../lib/phaser")

let config = {
    type: Phaser.CANVAS,
    width: window.innerWidth,
    height: window.innerHeight,
    background: '#000000',
    scene: [Load, Play]
}

let game = new Phaser.Game(config);

let keyLEFT, keyRIGHT, keyDOWN, keyUP, keyCLICK;