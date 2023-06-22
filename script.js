let x = document.getElementById("change");
function changeImage() {
  let val = Math.random() * 10;
  if (val <= 5) {
    x.src = "images/bulb-go-off-img.png";
  } else {
    x.src = "images/bulb-go-on-img.png";
  }
}
setInterval(changeImage, 300);
