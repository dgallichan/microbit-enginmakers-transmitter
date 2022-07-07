function chooseRadioGroupNumber () {
    basic.showString("?")
    maxGroups = 20
    isGroupChosen = false
    myPressedButton = ""
    while (!(isGroupChosen)) {
        isButtonPressed = false
        while (!(isButtonPressed)) {
            if (input.buttonIsPressed(Button.AB)) {
                myPressedButton = "AB"
                isButtonPressed = true
            } else if (input.buttonIsPressed(Button.B)) {
                myPressedButton = "B"
                isButtonPressed = true
            } else if (input.buttonIsPressed(Button.A)) {
                myPressedButton = "A"
                isButtonPressed = true
            }
        }
        if (myPressedButton == "B") {
            radioGroupNumber += 1
        } else if (myPressedButton == "A") {
            radioGroupNumber += -1
        } else if (myPressedButton == "AB") {
            isGroupChosen = true
            basic.showIcon(IconNames.Yes)
            music.playSoundEffect(music.builtinSoundEffect(soundExpression.happy), SoundExpressionPlayMode.UntilDone)
        }
        if (radioGroupNumber < 1) {
            radioGroupNumber = maxGroups
        }
        if (radioGroupNumber > maxGroups) {
            radioGroupNumber = 1
        }
        basic.showNumber(radioGroupNumber)
    }
    radio.setGroup(radioGroupNumber)
}
let isButtonPressed = false
let myPressedButton = ""
let isGroupChosen = false
let maxGroups = 0
let radioGroupNumber = 0
radioGroupNumber = 0
chooseRadioGroupNumber()
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
