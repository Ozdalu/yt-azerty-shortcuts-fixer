# WHAT CHANGES ARE NEEDED
| Action                                 | Current     | Future      | Section                       |
|----------------------------------------|------------:|------------:|:-----------------------------:|
| Next Frame (while paused)              |           . |           ; |                      Playback |
| Increase playback rate                 | > (SHIFT+.) | . (SHIFT+;) |                      Playback |
| Rotate through font sizes (decreasing) |           - |           ) | Subtitles and closed captions |
| Pan up                                 |           w |           z |              Spherical videos |
| Pan left                               |           a |           q |              Spherical videos |
| Zoom in (                              |           ] |           $ |              Spherical videos |
| Zoom out                               |           [ |           ^ |              Spherical videos |
<br>
<br>
<br>
So that means :

# Keydown Legacy keyCode changes to apply

| Target character | Firefox (current) | will become | Chrome (future) |
|-----------------:|------------------:|:-----------:|:----------------|
|        (SHIFT+); |            59 ';' |      ->     |             190 |
|                ) |               169 |      ->     |             189 |
|                z |            90 'Z' |      ->     |          87 'W' |
|                q |            81 'Q' |      ->     |          65 'A' |
|                $ |               164 |      ->     |             221 |
|                ^ |               160 |      ->     |             219 |


Source : https://dvcs.w3.org/hg/d4e/raw-file/tip/key-event-test.html