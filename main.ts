let count = 0
input.onButtonPressed(Button.B, function () {
    count = 9
    for (let index = 0; index < 10; index++) {
        basic.showNumber(count)
        basic.pause(100)
    }
})
