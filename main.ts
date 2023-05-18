basic.forever(function () {
    basic.showLeds(`
        . # . # .
        . # . # .
        . . . . .
        . . . . .
        . . . . .
        `)
})
basic.forever(function () {
    while (maqueen.Ultrasonic(PingUnit.Centimeters) <= 10) {
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
        basic.pause(500)
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
        basic.pause(500)
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
    }
})
basic.forever(function () {
    if (maqueen.Ultrasonic(PingUnit.Centimeters) <= 10) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 0)
    } else {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 100)
    }
})
