
let scales = "<G:minor C:minor D:minor A:minor>/8"

stack(
  n("0 2 4 <[6,8] [7,9]>*3").scale(scales).ccn(74).midi(1),

  
  n("0 1 2 3 4 5 6 7 8 9").scale("C:minor")
  .clip("<0.2 0.3 0.4 0.5 0.4 0.3>*3")
  .ccn(74).midi(0).midichan(3),

  n("1").scale("C:minor").midi(0).midichan(2),

  n("[2 6 0 4]/2").scale(scales)
  .clip("<0.4 0.2 0. 0.5>*2")
  .midi(0).midichan(5),

  n("[0 ~ 0 4]/8").scale(scales).clip("0.9").midi(0).midichan(4)
)
