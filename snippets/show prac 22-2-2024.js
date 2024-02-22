let scale = "<C:minor F:minor>/4"

stack(
  n("4@2 [1 4] <8 9>").add("<0 0 -1 3>").midi(0),

  n(sine.range(-10, 30).segment("<4 6 8>").fast(2))
  .midichan(2).midi(1),

  n("~ 0*3 14@2").midichan(3).midi(1),
  
  n("~@2 9*3, 0").add("<0 14>").midichan("4, 5").midi(1),

  n("0 ~ ~ <9*3 10>").midichan(1).midi(1),

  // n(perlin.range(10, 18).segment(12)).s("sawtooth, sine")
  // .room(1.2).vib(1.4).pan(sine.slow(2)).delay(1.2)
  // .gain(0.4).phaser("<1 2 8>").lpf(4000)

).scale(scale)
  // .segment("<6 12>")
