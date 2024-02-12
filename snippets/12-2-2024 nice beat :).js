let scale = "F2:major"
let notes = "<1 5 0 4>/4"
stack(
  n(notes).add("<[0, 2] [0, 5]>/2 -7")
    .segment(6).s("sawtooth").scale(scale).lpf("200")
    .room(0.2),
  
  s("<hh*3 hh*6>, ~!2 sd ~").crush(5),

  n(notes).add("14").scale(scale).segment(3).s("piano")
  .delay(0.5).gain(0.9).room("<0 0 0 2>"),

  n("0 1 2 3 4 5").add("<7 14>/2").scale(scale).s("gm_reed_organ")
  .gain(1.2).vib(7).room(1).pan(perlin.range(-0.8, 1).fast(1.5))
  
)
  // .segment("<4 6 8>").rev()
