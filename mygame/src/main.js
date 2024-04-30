import kaboom from "kaboom"

kaboom()

const PLAYER_MOVE_SPEED = 500;
const SCREEN_EDGE = 100;

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
