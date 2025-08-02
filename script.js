document.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector('.navbar');
  const navLinks = document.querySelector('.nav-links');

  // 1. Create and insert hamburger menu icon
  const menuToggle = document.createElement('div');
  menuToggle.classList.add('menu-toggle');
  menuToggle.innerHTML = '&#9776;'; // ☰ icon
  nav.appendChild(menuToggle);

  // Toggle nav visibility on click
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  // Hide mobile nav when resizing back to desktop
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      navLinks.classList.remove('active');
    }
  });

  // 2. Scroll-triggered fade-in animation
  const revealOnScroll = () => {
    const elements = document.querySelectorAll('.hero, .feature-item, .about, .cta');
    const windowHeight = window.innerHeight;

    elements.forEach(el => {
      const position = el.getBoundingClientRect().top;
      if (position < windowHeight - 100) {
        el.classList.add('visible');
      }
    });
  };
  window.addEventListener('scroll', revealOnScroll);
  window.addEventListener('load', revealOnScroll);

  // 3. Back to Top Button
  const backToTopBtn = document.createElement('button');
  backToTopBtn.innerHTML = '↑';
  backToTopBtn.id = 'backToTop';
  backToTopBtn.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    display: none;
    padding: 10px 15px;
    background-color: #00adb5;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    z-index: 999;
  `;
  document.body.appendChild(backToTopBtn);

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTopBtn.style.display = 'block';
    } else {
      backToTopBtn.style.display = 'none';
    }
  });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // 4. Dynamically embed local video in About section
  const aboutSection = document.querySelector('.about');
  const videoContainer = document.createElement('div');
  videoContainer.innerHTML = `
    <video controls width="100%" style="margin-top: 20px; border-radius: 8px; max-width: 600px;">
      <source src="videos/education.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>
  `;
  aboutSection.appendChild(videoContainer);
});
