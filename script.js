function scrollToSection(sectionId) {
  document.getElementById(sectionId).scrollIntoView({
    behavior: 'smooth',
  });
}
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}