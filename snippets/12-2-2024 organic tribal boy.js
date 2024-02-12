let scale = "D:minor"

stack(
  n("<0 3 6>*12, <-4 -2>").scale(scale).s("gm_percussive_organ"),
  s("woodblock").n("<0@7 1>").segment(12).room(perlin.range(0,5)).pan(-0.8),
  n("5 ~ ~ ~ ~ 5").scale(scale).s("conga").room("<2 0.2>").delay(3.1).pan(0.7),
  n(perlin.range(0, 14).fast(2).segment(24)).scale(scale).s("z_triangle")
)
