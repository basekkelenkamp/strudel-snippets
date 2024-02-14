
let scales = "<G:minor>"
let notes = "<0 4 [3 1] 6>*8" 
stack(
  n(notes).scale(scales).midi(0),

  n("0 ~ 0!3 <8*3 10*3>").scale(scales).ccn(sine.slow(2)).midi(1).midichan(2),

  n("~ 3 0!2").scale(scales).midi(1).midichan(3),

  n("0").scale(scales).midi(1).midichan(1),

  n(perlin.range(0, 14).fast(2).segment(12)).add("-7").scale(scales).s("sine").gain(0.2)
)
  // .segment("<6 12>/4")
