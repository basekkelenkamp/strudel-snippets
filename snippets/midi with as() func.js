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

  n("0 6 7 [2 4 6]").scale(scale).ply("<1 4>").midi(1),

  n(perlin.range(0, 24).segment(14)).add(-2).scale(scale).s("sine").gain(0.2).room(0.4).pan(sine.range(-1, 1).fast(1))
)
  // .segment("<4 12 [2 6]>")
