import kaboom from "kaboom";



    // Blue Ship
      loadRoot("sprites/");
      loadSpriteAtlas("blueship.png",{
          "ship":{
              "x":0,
              "y":0,
              "width":180,
              "height": 30,
              "sliceX":3,
              "sliceY":1,
          }
      });

      //Red
      loadRoot("sprites/");
      loadSpriteAtlas("red.png",{
          "red":{
              "x":0,
              "y":0,
              "width":30,
              "height": 30,

          }
      });

      //BlueShip
      add([
        sprite("ship"),
    ])

    const bean = add([
        sprite("ship")
    ]);















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
