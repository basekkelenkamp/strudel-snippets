stack(
  note("10/4").sound("piano, bd"),
  note("<c*4 c#*2 ~ ~ ~ ~>").sound("hh"),
  note("~ 32/8").sound("misc, rim"),

  n("<<1 3> [4,5]>/2").scale("C:minor").sound("gm_pad_choir").decay(1.3).gain(0.85),
  note("<c d>, [1 28 ~ ~]").sound("<oh hh bd>, <hh hh rim ~>").gain("<0.2 0.5 0.3>").lpf(800),

  
  n("<4 5>/8").scale("C:minor").sound("sawtooth").lpf("<400 600>/16"),
  
  n("4 7 9, <1@2 3 4>/4").scale("<C4:minor C5:minor>/16").sound("sine").attack(0.05).delay(0.2)
)
