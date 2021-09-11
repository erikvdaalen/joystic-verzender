radio.setGroup(38)
basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P3) < 400) {
        radio.sendString("j down")
        basic.pause(100)
    }
    if (pins.analogReadPin(AnalogPin.P4) < 400) {
        radio.sendString("j left")
        basic.pause(100)
    }
    if (pins.analogReadPin(AnalogPin.P3) > 800) {
        radio.sendString("j up")
        basic.pause(100)
    }
    if (pins.analogReadPin(AnalogPin.P4) > 800) {
        radio.sendString("j right")
        basic.pause(100)
    }
    if (input.buttonIsPressed(Button.A)) {
        radio.sendString("j press")
        basic.pause(100)
    }
    if (pins.digitalReadPin(DigitalPin.P10) == 0) {
        radio.sendString("up")
        basic.pause(100)
    }
    if (pins.digitalReadPin(DigitalPin.P8) == 0) {
        radio.sendString("down")
        basic.pause(100)
    }
    if (pins.digitalReadPin(DigitalPin.P9) == 0) {
        radio.sendString("right")
        basic.pause(100)
    }
    if (input.buttonIsPressed(Button.B)) {
        radio.sendString("left")
        basic.pause(100)
    }
    if (pins.digitalReadPin(DigitalPin.P7) == 0) {
        radio.sendString("select")
        basic.pause(100)
    }
    if (pins.digitalReadPin(DigitalPin.P6) == 0) {
        radio.sendString("mode")
        basic.pause(100)
    }
})
