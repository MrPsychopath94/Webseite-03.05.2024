let button1 = document.getElementById("btn1");
let header1 = document.getElementById("header1");

button1.onclick = function () {
  header1.style.color = "red";
};

let button2 = document.getElementById("btn2");
let header2 = document.getElementById("header2");

button2.onclick = function () {
  header2.style.color = "aquamarine";
};

let button3 = document.getElementById("bild");
let bildElement = document.getElementById("bildElement");

button3.onclick = function () {
  if (bildElement.style.display === "none") {
    bildElement.style.display = "block";
  } else {
    bildElement.style.display = "none";
  }
};
