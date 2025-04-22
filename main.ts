// Passenger device code

basic.forever(function () { }) // Keeps micro:bit running
keyboard.startKeyboardService()

// Find theme
input.onButtonPressed(Button.A, function() {
    keyboard.sendString("A")
})

// Find tasks
input.onButtonPressed(Button.B, function () {
    keyboard.sendString("B")
})

// Angry
input.onGesture(Gesture.Shake, function() {
    keyboard.sendString("G")
})

// Accept
input.rotation(Rotation.Pitch)

// Reject
input.rotation(Rotation.Pitch)