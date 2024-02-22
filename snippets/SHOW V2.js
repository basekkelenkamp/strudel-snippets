let scale = "<C:minor F:minor>/4"



stack(
  // n("0 4 [5 6] <8 9>").midi(0),

  // n("0*6").midichan(2).midi(1)

  // n("0@2 6!2").midichan(1).midi(1),

  // n(sine.range(0, 13).segment(12)).midichan(5).midi(1),

  // n("0 ~ 12*3 4").midichan("<4 5>/2").midi(1),
  
).scale(scale)
.segment("<6 12>/4")
