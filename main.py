angle = 0
anglew = 0
servos.P0.set_range(10, 170)

def on_forever():
    global anglew, angle
    for index in range(17):
        anglew = index * 10 + 10
        servos.P0.set_angle(anglew)
        basic.pause(100)
    for index2 in range(33):
        angle = anglew - index2 * 5
        servos.P0.set_angle(angle)
        basic.pause(100)
basic.forever(on_forever)
