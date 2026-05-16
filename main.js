const cursor = document.querySelector('.cursor');
const progressBar = document.querySelector('.progress-bar');
const faqToggles = document.querySelectorAll('.faq-toggle');
const consultForm = document.getElementById('consult-form');
const successMsg = document.getElementById('success-msg');

// Custom Cursor Movement
document.addEventListener('mousemove', (e) => {
    cursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
});

// Scroll Progress
window.addEventListener('scroll', () => {
    const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (window.scrollY / windowHeight) * 100;
    progressBar.style.width = `${progress}%`;
});

// FAQ Accordion
faqToggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        const row = toggle.parentElement;
        row.classList.toggle('active');
    });
});
