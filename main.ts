input.onButtonPressed(Button.AB, function () {
    basic.showString("¡Hola!")
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(330, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(392, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
})
basic.forever(function () {
    if (input.temperature() < 15) {
        basic.showString("Frio")
        basic.showString("" + (input.temperature()))
        basic.pause(2000)
        basic.showIcon(IconNames.Confused)
        basic.pause(2000)
    } else {
        if (input.temperature() > 27) {
            basic.showString("Calor")
            basic.showString("" + (input.temperature()))
            basic.pause(2000)
            basic.showIcon(IconNames.Skull)
            basic.pause(2000)
        } else {
            basic.showString("" + (input.temperature()))
            basic.pause(2000)
            basic.showIcon(IconNames.Happy)
        }
    }
    basic.pause(5000)
})
