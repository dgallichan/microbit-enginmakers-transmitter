radio.setGroup(0)
basic.showLeds(`
    # # # # #
    . . # . .
    . . # . .
    . . # . .
    . . # . .
    `)
basic.forever(function () {
    radio.sendValue("acc", input.acceleration(Dimension.Strength))
    led.toggle(4, 4)
    basic.pause(25)
})
