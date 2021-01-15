scene.setBackgroundColor(7)
effects.starField.startScreenEffect()
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . 5 5 5 5 8 . . . . . . . . 
    . . . . . . . f 8 . . . . . . . 
    . . 2 . . . . 8 2 f . . . . . . 
    . . f 2 . . . f 5 2 f . . . . . 
    . . 2 f 2 . . 8 2 f 2 . . . . . 
    9 5 f 2 f 2 f f 5 2 f 2 f 2 1 . 
    9 5 2 f 2 f 2 f 2 f 2 f 2 f 1 9 
    9 5 f 2 f 2 f f 5 2 f 2 f 2 1 1 
    9 5 2 f 2 f 2 f 2 f 2 f 2 f 2 . 
    . . . . . . . 8 5 2 f . . . . . 
    . . . . . . . f 2 f 2 . . . . . 
    . . . . . . . 8 5 2 . . . . . . 
    . . . . . . . f 2 . . . . . . . 
    . . . 5 5 5 5 8 . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
