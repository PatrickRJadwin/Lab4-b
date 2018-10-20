var storedNames = JSON.parse(sessionStorage.getItem("values"));
sessionStorage.clear();

var demo = document.getElementById("name");
var demo1 = document.getElementById("demo1");
var demo2 = document.getElementById("demo2");
var demo3 = document.getElementById("demo3");
var demo4 = document.getElementById("demo4");
var demo5 = document.getElementById("demo5");
var demo6 = document.getElementById("demo6");
var demo7 = document.getElementById("demo7");
var demo8 = document.getElementById("demo8");

demo.innerHTML = storedNames[0];
demo1.innerHTML = storedNames[1];
demo2.innerHTML = storedNames[2];
demo3.innerHTML = storedNames[3];
demo4.innerHTML = storedNames[4];
demo5.innerHTML = storedNames[5];
demo6.innerHTML = storedNames[6];
demo7.innerHTML = storedNames[7];
demo8.innerHTML = storedNames[8];
