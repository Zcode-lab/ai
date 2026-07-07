// Initialize Lenis Smooth Scroll
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// GSAP Animations
gsap.registerPlugin(ScrollTrigger);

// Animate Hero Text on Load
gsap.from('.hero h1', {
  y: 50,
  opacity: 0,
  duration: 1,
  ease: 'power2.out'
});
gsap.from('.hero p', {
  y: 50,
  opacity: 0,
  duration: 1,
  delay: 0.3,
  ease: 'power2.out'
});

// Animate Sections on Scroll
gsap.utils.toArray('.section').forEach(section => {
  gsap.from(section, {
    y: 50,
    opacity: 0,
    duration: 1,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: section,
      start: 'top 80%',
      toggleActions: 'play none none none'
    }
  });
});

// Scroll Progress
const progressBar = document.querySelector('.scroll-progress');
window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const docHeight = document.body.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;
  progressBar.style.width = scrollPercent + '%';
});

// Cursor Glow Effect
const cursor = document.querySelector('.cursor-glow');
document.addEventListener('mousemove', (e) => {
  gsap.to(cursor, {
    x: e.clientX,
    y: e.clientY,
    duration: 0.3,
    ease: 'power2.out'
  });
});
document.addEventListener('mouseenter', () => {
  cursor.style.display = 'block';
});
document.addEventListener('mouseleave', () => {
  cursor.style.display = 'none';
});

// Optional: Add more GSAP animations for buttons, cards, etc.
// You can also add magnetic hover effects, tilt effects, and more.
