
stack(
  // Model cycles
  note("< [f ~ ~ f] [f ~ f ~ ] >").ccn(74).ccv(sine.slow(4)).midi(0).midichan(1),
  note("a").ccn(74).ccv(sine.slow(4)).midi(0).midichan(2),
  note("[<c*8> <c*3>]").ccn(74).ccv(sine.slow(4)).midi(0).midichan(3),
  n("[0 2 0 <[6,8] [7,9]>]/8").scale("C:minor").ccn(74).midi(0).midichan(4),

  // Grandmother
  n("0 2 4 <[6,8] [7,9]>*3").scale("C:minor").ccn(74).midi(1)

)
