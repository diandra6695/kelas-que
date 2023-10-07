const btnSignIn = document.querySelector("#signIn");
const btnSignUp = document.querySelector("#signUp");
var elem = document.getElementById("myElement");
var elem2 = document.getElementById("myElement2");
const wrapper = document.querySelector(".wrapper");
const input = document.querySelector("form");
var isDragging = false;
var initialY1 = 500; // Mengubah posisi awal ke 500px dari atas
var initialY = 280;

elem.style.top = initialY1 + "px";

elem.addEventListener("touchstart", function (event) {
  var touch = event.touches[0];
  startY = touch.clientY;
  if (startY >= input.offsetTop + elem.offsetTop && startY <= input.offsetTop + elem.offsetTop + input.clientHeight) {
    isDragging = false; // Tidak ada penanganan pergerakan elemen
    input.focus();
  } else {
    event.preventDefault();
    isDragging = true;
    elem.style.transition = "none";
  }
});

document.addEventListener("touchmove", function (event) {
  if (isDragging) {
    event.preventDefault();

    var touch = event.touches[0];
    var y = touch.clientY;

    // if (y < initialY1) {
    //   y = initialY1;
    // }

    elem.style.top = y + "px";
  }
});

document.addEventListener("touchend", function () {
  if (parseInt(elem.style.top) > initialY1) {
    elem.style.top = "1200px";
    elem.style.transition = "top 0.4s ease-out";
  }
  if (parseInt(elem.style.top) < initialY1) {
    elem.style.top = "50%";
    elem.style.transition = "top 0.1s ease";
  }

  if (parseInt(elem.style.top) > 1000) {
    setTimeout(function () {
      elem.classList.add("hidden");
    }, 100);
  }
});

btnSignIn.addEventListener("click", function () {
  elem.classList.remove("hidden");
  elem.style.top = "50%"; // Setel ulang posisi elemen
});

// batas

elem2.style.top = initialY + "px";

elem2.addEventListener("touchstart", function (event) {
  var touch = event.touches[0];
  startY = touch.clientY;
  if (startY >= input.offsetTop + elem2.offsetTop && startY <= input.offsetTop + elem2.offsetTop + input.clientHeight) {
    isDragging = false; // Tidak ada penanganan pergerakan elemen
    input.focus();
  } else {
    event.preventDefault();
    isDragging = true;
    elem2.style.transition = "none";
  }
});

document.addEventListener("touchmove", function (event) {
  if (isDragging) {
    event.preventDefault();

    var touch = event.touches[0];
    var y = touch.clientY;

    // if (y < initialY) {
    //   y = initialY;
    // }

    elem2.style.top = y + "px";
  }
});

document.addEventListener("touchend", function () {
  if (parseInt(elem2.style.top) > initialY) {
    elem2.style.top = "1200px";
    elem2.style.transition = "top 0.4s ease-out";
  }
  if (parseInt(elem2.style.top) < initialY) {
    elem2.style.top = "280px";
    elem2.style.transition = "top 0.1s ease";
  }

  if (parseInt(elem2.style.top) > 1000) {
    setTimeout(function () {
      elem2.classList.add("hidden");
    }, 100);
  }
});

btnSignUp.addEventListener("click", function () {
  elem2.classList.remove("hidden");
  elem2.style.top = "280px"; // Setel ulang posisi elemen
});
