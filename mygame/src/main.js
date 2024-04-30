const PLAYER_MOVE_SPEED = 500;
const SCREEN_EDGE = 100;





    const player = add([
        sprite(blueship),
        scale(0.17)
        pos(width()/2, height()/2),
        area(),
        "player"
    ]);






    onKeyDown("left", () => {
    if(blueship.pos.x <= width() - SCREEN_EDGE){
		blueship.move(PLAYER_MOVE_SPEED,0)
	}
    })

    onKeyDown("right", () => {
    blueship.move(SPEED, 0)
    })

















































































































// links for:
	// sprite = https://www.pngegg.com/en/search?q=space+Invaders
