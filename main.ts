let angle = 0
let anglew = 0
servos.P0.setRange(10, 170)
basic.forever(function on_forever() {
    
    for (let index = 0; index < 17; index++) {
        anglew = index * 10 + 10
        servos.P0.setAngle(anglew)
        basic.pause(100)
    }
    for (let index2 = 0; index2 < 33; index2++) {
        angle = anglew - index2 * 5
        servos.P0.setAngle(angle)
        basic.pause(100)
    }
})
