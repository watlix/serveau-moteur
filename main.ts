let anglew = 0
servos.P0.setRange(10, 170)
basic.forever(function () {
    for (let index = 0; index <= 16; index++) {
        anglew = index * 10 + 10
        servos.P0.setAngle(anglew)
        basic.pause(100)
    }
})
