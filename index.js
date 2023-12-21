const toTop = document.querySelector(".to-top");

toTop.addEventListener("click", (e) => {
  e.preventDefault();

  const targetElement = document.body;

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
});

function closePopup1() {
  document.getElementById('overlay').style.display = 'none';
  document.getElementById('popup').style.display = 'none';
}

function pop1() {
  document.getElementById('overlay').style.display = 'block';
  document.getElementById('popup').style.display = 'block';
}

function pop2() {
  document.getElementById('overlay2').style.display = 'block';
  document.getElementById('popup2').style.display = 'block';
}

function closePopup2() {
  document.getElementById('overlay2').style.display = 'none';
  document.getElementById('popup2').style.display = 'none';
}





function pop3() {
  document.getElementById('overlay3').style.display = 'block';
  document.getElementById('popup3').style.display = 'block';
}

function closePopup3() {
  document.getElementById('overlay3').style.display = 'none';
  document.getElementById('popup3').style.display = 'none';
}
function pop4() {
  document.getElementById('overlay4').style.display = 'block';
  document.getElementById('popup4').style.display = 'block';
}

function closePopup4() {
  document.getElementById('overlay4').style.display = 'none';
  document.getElementById('popup4').style.display = 'none';
}
function pop5() {
  document.getElementById('overlay5').style.display = 'block';
  document.getElementById('popup5').style.display = 'block';
}

function closePopup5() {
  document.getElementById('overlay5').style.display = 'none';
  document.getElementById('popup5').style.display = 'none';
}
function pop6() {
  document.getElementById('overlay6').style.display = 'block';
  document.getElementById('popup6').style.display = 'block';
}

function closePopup6  () {
  document.getElementById('overlay6').style.display = 'none';
  document.getElementById('popup6').style.display = 'none';
}

window.addEventListener("scroll", () => {
  const navTable = document.getElementById("navTable");
  const scrollY = window.scrollY;

  if (scrollY > 50) {
    navTable.classList.add("fixed-navbar");
  } else {
    navTable.classList.remove("fixed-navbar");
  }
});

function pop7() {
  document.getElementById('overlay7').style.display = 'block';
  document.getElementById('popup7').style.display = 'block';
}

function closePopup7  () {
  document.getElementById('overlay7').style.display = 'none';
  document.getElementById('popup7').style.display = 'none';
}
function pop8() {
  document.getElementById('overlay8').style.display = 'block';
  document.getElementById('popup8').style.display = 'block';
}

function closePopup8  () {
  document.getElementById('overlay8').style.display = 'none';
  document.getElementById('popup8').style.display = 'none';
}
function pop9() {
  document.getElementById('overlay9').style.display = 'block';
  document.getElementById('popup9').style.display = 'block';
}

function closePopup9  () {
  document.getElementById('overlay9').style.display = 'none';
  document.getElementById('popup9').style.display = 'none';
}