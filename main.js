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

// Form Submission (Formspree Integration)
if (consultForm) {
    consultForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const submitBtn = consultForm.querySelector('.minimal-btn');
        const originalBtnText = submitBtn.textContent;
        
        submitBtn.disabled = true;
        submitBtn.textContent = '기록 중...';
        
        const formData = new FormData(consultForm);
        
        try {
            const response = await fetch(consultForm.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                consultForm.classList.add('hidden');
                successMsg.classList.remove('hidden');
            } else {
                alert('잠시 후 다시 시도해 주세요.');
                submitBtn.disabled = false;
                submitBtn.textContent = originalBtnText;
            }
        } catch (error) {
            console.error('Error:', error);
            alert('연결 상태를 확인해 주세요.');
            submitBtn.disabled = false;
            submitBtn.textContent = originalBtnText;
        }
    });
}
