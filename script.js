
// add class navbarDark on navbar scroll
const header = document.querySelector(".navbar");
window.onscroll = function () {
  var top = window.scrollY;
  if (top >= 100) {
    header.classList.add("navbarDark");
  }
  else {
    header.classList.remove("navbarDark");
  }
}


//download file
function download_file() {
  document.getElementById("my_download").click()
}

// add skill animation after sroll on it
function reveal() {
  var reveals = document.querySelectorAll(".progress-bar");
  for (var i = 0; i <reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

function reveal2() {
  var reveals = document.querySelectorAll(".progress-bar-2");
  for (var i = 0; i <reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal, reveal2);