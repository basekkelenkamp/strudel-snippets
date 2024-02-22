
let scale = "<C:minor F:minor>/4"


stack(
  n("0 [5 6 4]*2 <5 9> 2").add("<0 2>").scale(scale).midi(1),

  n("0*2, 4 5").scale(scale).midichan(1).midi(0),

  n("0*6").scale(scale).midichan(2).midi(0),

  // n("0 ~ 5*5 ~").scale(scale).midichan("<3 5>").midi(0)
  
).segment(2)
