radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        numero_azar = randint(0, 200)
    }
    basic.pause(numero_azar)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    basic.pause(2000)
    basic.clearScreen()
    numero_azar = randint(0, 100)
    if (numero_azar == 10 || numero_azar < 10) {
        radio.sendNumber(0)
    }
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(1)
})
let numero_azar = 0
radio.setGroup(5)
basic.forever(function () {
	
})
