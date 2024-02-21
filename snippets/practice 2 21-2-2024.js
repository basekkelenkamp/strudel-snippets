// Hello :))))))))

let scale = "<C:major>"

stack(
  n("5@2 [6 2 3 0] 2@2 9!2").add("<<0 -7> <0 14>>").midi(0),

  n("0*4").ply("<1 2 [4 6] [3 12]>/2").midichan(2).midi(1),

  n("<[0 ~ 5*3 [0 9]] 0 8*3>").midichan(1).midi(1),

  n("0 0*2 ~ [9 12]*2").midichan(3).midi(1),
  n("0 0*2 ~ [9 12]*2").midichan(6).midi(1),

  // n(perlin.range(0, 14).segment(12).fast(0.5)).s("sawtooth, sine")
  // .gain(0.2).room(1.2).vib(1.6).pan(sine.fast(1.2))
  // .delay(0).lpf(2000)
  
).scale(scale)
