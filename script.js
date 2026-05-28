// Language toggle
document.getElementById('mnBtn').addEventListener('click', function() {
  this.classList.add('active');
  document.getElementById('enBtn').classList.remove('active');
});

document.getElementById('enBtn').addEventListener('click', function() {
  this.classList.add('active');
  document.getElementById('mnBtn').classList.remove('active');
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});
