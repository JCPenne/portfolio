const navButton = document.querySelectorAll('.nav-button');

navButton.forEach(button => {
  const navUnderline = button.nextElementSibling;

  button.addEventListener('mouseenter', () => {
    gsap.to(navUnderline, {
      width: '100%',
      duration: 1.5,
      display: 'block',
      height: '2px',
      ease: 'power2.out',
    });
  });

  button.addEventListener('mouseleave', () => {
    gsap.to(navUnderline, {
      width: '0%',
      duration: 1.5,
      height: '2px',
      ease: 'power2.out',
    });
  });
});
