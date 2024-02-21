let scale = "<C:minor F:minor>/4"


stack(
  n("0@3 [4@2 6@2] <7 9>").midi(0),
  
  n("<0*6> <~ 12*12>").midichan(2).midi(1),

  n("0 ~ 4 8*3").midichan(1).midi(1),

  n("0 4 6*2 [1 9]*4").midichan(5).midi(1),

  n("<0 ~ 5!2> <12*2 ~ 3*3>").midichan(3).midi(1),

  n(perlin.range(0, 14).segment(12)).s("sawtooth")
  .gain(0.2).pan(0.8).room(1.7).vib(1.2)

  
).scale(scale)
  // .segment("<6 8 [12 16]>")
