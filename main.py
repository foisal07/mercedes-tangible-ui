def on_gesture_shake():
    basic.show_leds("""
        . . . . .
        . . . . .
        . # # # .
        . # # # .
        . # # # .
        """)
input.on_gesture(Gesture.SHAKE, on_gesture_shake)

def on_forever():
    pass
basic.forever(on_forever)

def on_gesture_shake2():
    pass
input.on_gesture(Gesture.SHAKE, on_gesture_shake2)