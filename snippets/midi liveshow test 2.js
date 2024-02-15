const as = register('as', (mapping, pat) => {
  return pat.fmap((v) => {
    v = Array.isArray(v) ? v : [v];
    v = Object.fromEntries(mapping.map((prop, i) => [prop, v[i]]));
    return v;
  });
})

let scale = "<C:minor F:minor>/4"

stack(

  "<1:0!2 1:6!4>, 2:4*6 <6:2*6 6:2*12>, <3:0*2 3:5*2>".as("midichan:n").scale(scale).midi(0),

  // n("0 6 7 [2 4 6]").scale(scale).ply("<1 4>").midi(1),

  n(saw.range(0, 24).segment(14)).add("-2").scale(scale).s("sawtooth")
  .lpf(sine.range(200, 4000).slow(2)).vib("4:.1")
  .room(2).rsize("<2 4>/2").rlp(3000).delay(0.8).gain(0.1)
)
  // .segment("<4 12 [2 6]>")
