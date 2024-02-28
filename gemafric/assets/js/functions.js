
$('.banner_slider').slick({
  dots: true,
  autoplay: true,
  autoplaySpeed: 1000,
  infinite: true,
  slidesToShow: 1,
  vertical: true,
  slidesToScroll: 1

});


function toggleDropdown() {
  var dropdownContent = document.getElementById("dropdownContent1");
  dropdownContent.style.display = (dropdownContent.style.display === "block") ? "none" : "block";
}