controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . 9 9 9 9 9 9 9 9 9 9 9 9 9 
        . . . 9 9 9 9 9 9 9 9 9 9 9 9 9 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . 9 9 9 9 9 9 9 9 9 9 9 9 9 
        . . . 9 9 9 9 9 9 9 9 9 9 9 9 9 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, projectile, 200, 200)
})
let mySprite: Sprite = null
let projectile: Sprite = null
let XWing: Sprite = null
scene.setBackgroundColor(12)
effects.starField.startScreenEffect()
controller.moveSprite(XWing, 200, 200)
XWing = sprites.create(img`
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
info.setLife(3)
game.onUpdateInterval(500, function () {
    mySprite = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . f f f . 
        . . . . . . . . . . . f f 9 9 f 
        . . . . 7 f 7 f 7 f 7 f 9 9 9 f 
        . . . f a a a a a a a a a a a f 
        . . f 7 f f f f f f f f f f f f 
        . . . f a a a a a a a a a a f . 
        . . . . 7 f 7 f 7 f 7 f f f 9 9 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
})
