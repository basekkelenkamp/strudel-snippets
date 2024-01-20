let _mouseX=0.5,_mouseY=0.5;
document.onmousemove = (e) => {
  _mouseX = e.clientX/document.body.clientWidth;
  _mouseY = e.clientY/document.body.clientHeight;
  
}
let mouseX = ref(() => _mouseX)
let mouseY = ref(() => _mouseY)




stack(
  s("hh*8")
  .speed(mouseX.range(.5,1))
  .gain(mouseY),
)
