// import kaboom from "kaboom";



//     // Blue Ship
//       loadRoot("sprites/");
//       loadSpriteAtlas("blueship.png",{
//           "ship":{
//               "x":0,
//               "y":0,
//               "width":180,
//               "height": 30,
//               "sliceX":3,
//               "sliceY":1,
//           }
//       });

//       //Red
//       loadRoot("sprites/");
//       loadSpriteAtlas("red.png",{
//           "red":{
//               "x":0,
//               "y":0,
//               "width":30,
//               "height": 30,

//           }
//       });

//       //BlueShip
//       add([
//         sprite("ship"),
//     ])

//     const player = add([
//         sprite("ship")
//     ]);




// Initialize Kaboom.js
kaboom();

// Define constants
const PLAYER_SPEED = 200;
const ALIEN_SPEED = 50;
const ALIEN_FREQUENCY = 0.5;
const BULLET_SPEED = 400;

// Load assets
loadRoot('https://i.imgur.com/');
loadSprite('ship', 'blueship.png');
loadSprite('red', 'red.png');

// Define player
const player = add([
  sprite('ship'),
  pos(width() / 2, height() - 40),
  origin('center')
]);

// Player movement
keyDown('left', () => {
  player.move(-PLAYER_SPEED, 0);
});
keyDown('right', () => {
  player.move(PLAYER_SPEED, 0);
});









    // onKeyDown("left", () => {
    // if(blueship.pos.x <= width() - SCREEN_EDGE){
	// 	blueship.move(PLAYER_MOVE_SPEED,0)
	// }
    // })

    // onKeyDown("right", () => {
    // blueship.move(SPEED, 0)
    // })

















































































































// links for:
	// sprite = https://www.pngegg.com/en/search?q=space+Invaders
