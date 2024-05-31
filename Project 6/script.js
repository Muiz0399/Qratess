document.addEventListener("DOMContentLoaded", function () {
  var dropdownIcon = document.getElementById("dropdown-icon");
  var dropdownMenu = document.getElementById("nav-dropdown");

  dropdownIcon.addEventListener("click", function () {
    if (dropdownMenu.style.display === "none" || !dropdownMenu.style.display) {
      dropdownMenu.style.display = "block";
    } else {
      dropdownMenu.style.display = "none";
    }
  });
});

// hamburger
document.addEventListener("DOMContentLoaded", function () {
  var hamburger = document.getElementById("hamburger");
  var nav = document.querySelector(".header-nav");

  hamburger.addEventListener("click", function () {
    nav.classList.toggle("show");
  });
});

// Fifth-Section

document.addEventListener("DOMContentLoaded", function () {
  const swiperSlides = document.querySelectorAll(".swiper-slide");

  let currentSlideIndex = 0;

  function changeImages() {
    swiperSlides.forEach((slide, index) => {
      slide.style.opacity = index === currentSlideIndex ? "1" : "0";
    });

    const sparkle = document.querySelector(".sparkle");
    const dollar = document.querySelector(".dollar");

    if (currentSlideIndex % 2 === 0) {
      sparkle.classList.add("active");
      dollar.classList.remove("active");
    } else {
      dollar.classList.add("active");
      sparkle.classList.remove("active");
    }

    currentSlideIndex = (currentSlideIndex + 1) % swiperSlides.length;
  }

  setInterval(changeImages, 1000);
});

//  Footer Language Selector

document.addEventListener("DOMContentLoaded", function () {
  const langInput = document.querySelector(".lang-input");
  const langMenu = document.querySelector(".lang-menu");

  langInput.addEventListener("click", function () {
    langMenu.style.display =
      langMenu.style.display === "block" ? "none" : "block";
  });

  langMenu.addEventListener("click", function (event) {
    if (event.target.classList.contains("lang")) {
      const selectedValue = event.target.getAttribute("data-value");
      const selectedText = event.target.textContent;

      langInput.textContent = selectedText + " ";

      langMenu.style.display = "none";
    }
  });
});

// For Fans

document.addEventListener("DOMContentLoaded", function() {
  document.querySelector('.ff-five-duplicate-active').classList.remove('ff-five-inactive');

  document.querySelectorAll('.ff-five-bullets .ff-five-item').forEach(item => {
    item.addEventListener('click', function() {
      let targetClass = this.textContent.trim() === '1' ? '.ff-five-duplicate-active' : '.ff-five-duplicate-next';
      let targetElement = document.querySelector(targetClass);
      document.querySelectorAll('.ff-five-duplicate-active, .ff-five-duplicate-next').forEach(duplicateElement => {
        duplicateElement.classList.add('ff-five-inactive');
      });
      targetElement.classList.remove('ff-five-inactive');
      document.querySelectorAll('.ff-five-bullets .ff-five-item').forEach(bullet => {
        bullet.classList.remove('current');
      });
      this.classList.add('current');
    });
  });
});
// // Buttons 
document.addEventListener("DOMContentLoaded", function() {
  document.querySelector('.ff-five-duplicate-active').classList.remove('ff-five-inactive');

  document.querySelectorAll('.ff-five-bullets .ff-five-item').forEach(item => {
    item.addEventListener('click', function() {
   
      document.querySelectorAll('.ff-five-bullets .ff-five-item').forEach(otherItem => {
        otherItem.classList.remove('current');
        otherItem.style.backgroundColor = '';
        otherItem.style.color = '';
      });

      this.classList.add('current');
      this.style.backgroundColor = 'black';
      this.style.color = 'white';
    });
  });
});

// xxxxxxxxxxxxxxxxxxxxxxxx










