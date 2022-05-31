

const preIcon = '<img src="assets/icons/arrow-left-icon.svg" alt="">';
const nextIcon = '<img src="assets/icons/arrow-right-icon.svg" alt="">';


$(document).ready(function () {
  var owl = $(".owl-carousel-1");
  owl.owlCarousel({
    margin: 5,
    nav: true,
    loop: true,
    navText: [
      preIcon,
      nextIcon],
    responsive: {
      0: {
        items: 1,
      },
      568: {
        items: 2,
      },
      768: {
        items: 3,
      },
      1000: {
        items: 4,
      },
    },
  });
});

$(document).ready(function () {
  var owl = $(".owl-carousel-2");
  owl.owlCarousel({
    margin: 5,
    nav: true,
    loop: true,
    navText: [
      preIcon,
      nextIcon],
    responsive: {
      0: {
        items: 1,
      },
      568: {
        items: 2,
      },
      768: {
        items: 3,
      },
      1000: {
        items: 4,
      },
    },
  });
});

$(document).ready(function () {
  var owl = $(".owl-carousel-3");
  owl.owlCarousel({
    margin: 5,
    nav: true,
    loop: true,
    navText: [
      preIcon,
      nextIcon],
    responsive: {
      0: {
        items: 1,
      },
      568: {
        items: 2,
      },
      768: {
        items: 3,
      },
      1000: {
        items: 4,
      },
    },
  });
});

$(document).ready(function () {
  var owl = $(".owl-carousel-4");
  owl.owlCarousel({
    margin: 10,
    nav: false,
    navText: false,
    autoHeight: false,
    loop: true,
    responsive: {
      0: {
        items: 1,
      },
      1000: {
        items: 1,
      }
    },
  });
});






var val1 = document.getElementById('minus');
if (document.getElementById('input').value === '0') {
  val1.disabled = true
}

const plusBtn = document.getElementById('plus');

plusBtn.addEventListener('click', function () {
  var val1 = document.getElementById('minus');
  val1.disabled = false;
  const inputBtn = document.getElementById('input').value;
  const newInputBtn = parseInt(inputBtn);
  const totalPlus = newInputBtn + 1;
  document.getElementById('input').value = totalPlus;

});
const minusBtn = document.getElementById('minus');
minusBtn.addEventListener('click', function () {

  const inputBtn = document.getElementById('input').value;
  const newInputBtn = parseInt(inputBtn);
  const totalPlus = newInputBtn - 1;
  if (totalPlus === 0) {
    val1.disabled = true;
  }
  document.getElementById('input').value = totalPlus;

});



function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";

}
document.getElementById("defaultOpen").click();
