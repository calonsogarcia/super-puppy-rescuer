Super Puppy Rescuer

https://github.com/calonsogarcia/super-puppy-rescuer.git


Description
A kid has to walk while puppies and other animals appear. 
The kid has to cach up the puppies and jump over the other animals/grandma's.
The game ends when the kid collides with a scaring animal or a grandma.
(BONUS 1! Also can appear grandma's which ones gives bonuses if you jump or makes you die if you collide)


MVP
. It has 1 kid that moves horizontally and vertically for jumping obstacles
. The puppies, scaring animals and grandma's come from the right side of the screen
. The game is over when there's a collision with a scaring animal or a grandma (BONUS 3! 5 scaring animal collisions and 1 grandma collision)
. Final reult: number of puppies (BONUS 4! Different points depending on the puppy type)
. Increasing velocity
. (BONUS 2! Choose kind of kid to play)


Backlog
BONUS 1!
BONUS 2!
BONUS 3!
BONUS 4!



Data Structure

main.js
. splashScreen()
. gameScreen()
. gameoverScreen()
. addEventListeners()


game.js
. generatePuppy()
. generateEnemy()
. gameLoop()
. checkGameover()

kid.js
. kid() {this.x; this.y; this.with; this.height; this.image}
. drawKid()
. moveKid()
. jumpKid()
. checkCollision()

puppy.js
. puppy() {this.x; this.y; this.with; this.height; this.speed; this.image}
. drawPuppy()
. movePuppy()

enemy.js
. enemies() {this.x; this.y; this.with; this.height; this.speed; this.image}
. drawEnemy()
. moveEnemy()


States and States transitions
. splashScreen
. (Bonus! choose player screen)
. gameScreen
. gameoverScreen


Task
index.html
main.js
canvas
splashScreen
gameoverScreen
kid
animals
enemies


Aditional links
- Trello
https://trello.com/invite/b/E953L6kC/d163dbbe7cdc5a52538daad0dc003c64/game

- Git
- Slides

- Skectches
https://docs.google.com/drawings/d/1CkIzBZHMmqHJQmKfBp-qH_aniSD7x_pBearcE492mao/edit?usp=sharing
https://docs.google.com/drawings/d/1URnvIe-ES4UzKJ5vfMXE0eaNMEGXCvDpPP0Cxv-e4Aw/edit?usp=sharing
https://docs.google.com/drawings/d/1KPcHn7kQKCCW683CEwlH7e_PcAr0F3itj4j3iNh-JvE/edit?usp=sharing
https://docs.google.com/drawings/d/1FloiINAZLY1bBwVB7K6B3kekuOcczMABNYSdATkoVf8/edit?usp=sharing