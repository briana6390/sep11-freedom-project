import kaboom from "kaboom";

kaboom();

// Define constants
const PLAYER_SPEED = 200;
const ALIEN_SPEED = 50;
const ALIEN_FREQUENCY = 0.5;
const BULLET_SPEED = 400;

// Load assets

loadSprite('bShip', 'bluwship.png');
loadSprite('alien', 'c1sehKZ.png');

// Define player
const player = add([
  sprite('bShip'),
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

// Define bullet
function spawnBullet(x, y, number) {
  const bullet = add([
    text(number.toString()),
    pos(x, y),
    origin('center'),
    color(1, 0, 0),
    'bullet'
  ]);
  bullet.move(0, -BULLET_SPEED);
}

// Shooting
keyPress('space', () => {
  spawnBullet(player.pos.x, player.pos.y - 10, rand(1, 10));
});

// Spawn aliens
function spawnAlien() {
  const alien = add([
    sprite('alien'),
    pos(rand(0, width()), -40),
    origin('center'),
    'alien'
  ]);
  alien.move(0, ALIEN_SPEED);
}

loop(ALIEN_FREQUENCY, () => {
  spawnAlien();
});

// Collision detection
collides('bullet', 'alien', (bullet, alien) => {
  const sum = parseInt(prompt("What is the sum of 3 + 5?"));
  if (sum === 8) {
    destroy(alien);
    destroy(bullet);
  } else {
    player.color = rgb(1, 0, 0);
    wait(0.3, () => {
      player.color = rgb();
    });
  }
});

// Reset player color after a delay
player.action(() => {
  player.color = rgb();
});

// Border collision
player.action(() => {
  if (player.pos.x < 0) {
    player.pos.x = 0;
  }
  if (player.pos.x > width()) {
    player.pos.x = width();
  }
});


















































































































// links for:
	// sprite = https://www.pngegg.com/en/search?q=space+Invaders
