input.onPinPressed(TouchPin.P0, function () {
    love = randint(0, 100)
    basic.showNumber(love)
    if (randint(0, 25) == love) {
        basic.showString("NO LOVE")
    }
    if (randint(26, 50) == love) {
        basic.showString("BFF LOVE")
    }
    if (randint(51, 75) == love) {
        basic.showString("BROKENHEARTEDLOVE")
    }
    if (randint(76, 100) == love) {
        basic.showString("FIERY HOT LOVE")
    }
})
let love = 0
basic.showString("Love" + "Meter" + "Test")
basic.forever(function () {
    for (let index = 0; index < 1; index++) {
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Birthday), music.PlaybackMode.UntilDone)
    }
})
