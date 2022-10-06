function show() {
    var toggle_btn = document.getElementById("toggle_btn");
    var slide = document.getElementById("slide");
    if (toggle_btn.checked == true) {
        
        slide.style.transform = "translateY(17px)";slide.style.display = "block";
    } else {
        slide.style.transform = "translateY(-560px)";slide.style.display = "none";
    }
}
//// sponsor
$('.owl-theme').owlCarousel({
    loop: true,
    margin: 15,
    nav: false,
    autoplay: true,
    autoplayTimeout: 6000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items:2
      },
      390: {
        items: 2
      },
      600: {
        items: 3
      },
      1000: {
        items: 5
      }
    }
  })