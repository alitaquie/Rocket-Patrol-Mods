/*
Name: Mohammad Taquie
Title: Rocket Patrol Mods
Time: 10 hours

Mods implemented:
---------------------------------------------------------------------------------------
1-point tier:

    - Add your own (copyright-free) looping background music to the Play scene (1)
    - Allow the player to control the Rocket after it's fired (1)

    total: 2

3-point tier: 
    - Display the time remaining (in seconds) on the screen (3)

    total: 3

5-point tier:
    - Create a new enemy Spaceship type (w/ new artwork) that's smaller, moves faster, and is worth more points (5)
    -Implement a new timing/scoring mechanism that adds time to the clock for successful hits and subtracts time for misses (5)
    -Implement mouse control for player movement and left mouse click to fire (5)

    total: 15

Overall score: 20
---------------------------------------------------------------------------------------
citations:

 https://rexrainbow.github.io/phaser3-rex-notes/docs/site/timer/

 spaceship art done on Piskel 


*/


let config = {
    type: Phaser.AUTO,
    width: 640,
    height: 480,
    scene: [Menu, Play]
}

let game = new Phaser.Game(config)
// set UI sizes
let borderUISize = game.config.height / 15
let borderPadding = borderUISize / 3

//reserve keyboard bindings
let keyFIRE, keyRESET, keyLEFT, keyRIGHT
