var slider = document.getElementById("myRange");
var slider2 = document.getElementById("myRange2");
var slider3 = document.getElementById("myRange3");
var slider4 = document.getElementById("myRange4");
var slider5 = document.getElementById("myRange5");
var slider6 = document.getElementById("myRange6");
var slider7 = document.getElementById("myRange7");
var output = document.getElementById("demo");
var output2 = document.getElementById("demo2");
var output3 = document.getElementById("demo3");
var output4 = document.getElementById("demo4");
var output5 = document.getElementById("demo5");
var output6 = document.getElementById("demo6");
var output7 = document.getElementById("demo7");

output.innerHTML = slider.value; // Display the default slider value
output2.innerHTML = slider2.value;
output3.innerHTML = slider3.value;
output4.innerHTML = slider4.value;
output5.innerHTML = slider5.value;
output6.innerHTML = slider6.value;
output7.innerHTML = slider7.value;

var isSlid = [false, false, false, false, false, false, false];

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
  if (this.value == 0){
    isSlid[0] = false;
  }
  else if (this.value > 0) {
    isSlid[0] = true;
  }
}
slider2.oninput = function() {
  output2.innerHTML = this.value;
  if (this.value == 0){
    isSlid[1] = false;
  }
  else if (this.value > 0) {
    isSlid[1] = true;
  }
}
slider3.oninput = function() {
  output3.innerHTML = this.value;
  if (this.value == 0){
    isSlid[2] = false;
  }
  else if (this.value > 0) {
    isSlid[2] = true;
  }
}
slider4.oninput = function() {
  output4.innerHTML = this.value;
  if (this.value == 0){
    isSlid[3] = false;
  }
  else if (this.value > 0) {
    isSlid[3] = true;
  }
}
slider5.oninput = function() {
  output5.innerHTML = this.value;
  if (this.value == 0){
    isSlid[4] = false;
  }
  else if (this.value > 0) {
    isSlid[4] = true;
  }
}
slider6.oninput = function() {
  output6.innerHTML = this.value;
  if (this.value == 0){
    isSlid[5] = false;
  }
  else if (this.value > 0) {
    isSlid[5] = true;
  }
}
slider7.oninput = function() {
  output7.innerHTML = this.value;
  if (this.value == 0){
    isSlid[6] = false;
  }
  else if (this.value > 0) {
    isSlid[6] = true;
  }
}
var val = false;
button.onclick = function() {
  for (var i = 0; i < isSlid.length; i++) {
    if (isSlid[i] == false) {
      val = false;
      window.alert('One or more sliders has not been modified. \n please select a value greater than 0');
      window.close();
      break;
    } else {
      val = true;
    }
  }
  if (val == true) {
    var valarr = [textarea.value, slider.value, slider2.value, slider3.value, slider4.value, slider5.value, slider6.value, slider7.value, textarea2.value];
    sessionStorage.setItem("values", JSON.stringify(valarr));
    window.open("surveyresult.html");
  }
}
