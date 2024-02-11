
let scale = "C:minor"
setCps(170/4/60)

n("0 4 6 <7 8>".transpose("0, 2, <6 3>")).scale(scale).clip(1.4).s("sawtooth:16")
  .vib("0.1:0.5").vibmod("<1 0.1 0.3 [4 0.2]>")
  .room(4).gain(0.7).lpf(sine.segment(32).range(100, 3000))
  .slow(2)
  .segment("<1 2 3 4>/4")
  .room(2)
