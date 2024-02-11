
let scale = "C:minor"
setCps(170/4/60)

stack(
  n("<[0 4]/2, <-2 6 0>/4, <12*4 15*4>/4>/2").scale(scale).sound("piano")
  .decay(10)
  .delay(0.5).delayfeedback(0.8)
  .room(0.7).compressor("-20:20:10")
  .gain(0.3),


  n("0 3 7").s('sine').scale("<C2:minor C3:minor>/4").detune("2").phaser("3"),

  s(`
    [hh rim], <bd [sd ht@2]>, <oh*8 ~>/8
    
  `).bank("KorgT3, KorgM1").compressor("-20:20:10").phaser(cosine.range(0,5))
)
