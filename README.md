# **Super Puppy Rescuer**

## **Description**
A Supper-Kid has to walk and jump to catch up the puppies while grandmothers appear. 
The kid has to jump over the grandma's to continue the game.
The game ends when the kid collides with a grandma.


## **MVP**
> It has 1 kid that jumps to avoid obstacles
> The puppies and the grandma's come from the right side of the screen
> The game is over when there's a collision with a grandma



## **Data Structure**

### main.js
* splashScreen()
* gameScreen()
* gameoverScreen()
* addEventListeners()

### game.js
* generatePuppy()
* generateEnemy()
* checkCollision()
* counter()
* checkGameover()
* gameLoop()

### kid.js
* kid() {this.x; this.y; this.with; this.height; this.image}
* drawKid()
* jumpKid()
* moveKid()
* checkCollision()

### puppy.js
* puppy() {this.x; this.y; this.with; this.height; this.speed; this.image}
* drawPuppy()
* movePuppy()

### enemy.js
* enemies() {this.x; this.y; this.with; this.height; this.speed; this.image}
* drawEnemy()
* moveEnemy()


## States and States transitions
* splashScreen
* gameScreen
* gameoverScreen


## Task
* index.html
* style.css (basic)
* main.js
* canvas
* splashScreen
* gameoverScreen
* create kid
* create puppies
* create enemies
* movements (basic)
* collisions
* counter
* veloity
* movements (forward/backward)
* music
* style.css (complete)



## Aditional links
- Trello
https://trello.com/invite/b/E953L6kC/d163dbbe7cdc5a52538daad0dc003c64/game

- Git
https://github.com/calonsogarcia/super-puppy-rescuer.git

- Slides
https://docs.google.com/presentation/d/1O3xU790TE6UGkSYZd6euC4hUJ4PIOxioSqieVfpXK7I/edit?usp=sharing

- Link
https://calonsogarcia.github.io/super-puppy-rescuer/