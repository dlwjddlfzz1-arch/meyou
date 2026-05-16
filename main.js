const themeBtn = document.getElementById('theme-btn');
const body = document.body;
const consultForm = document.getElementById('consult-form');
const successMsg = document.getElementById('success-msg');

// Theme Toggle Logic
themeBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    if (body.classList.contains('dark-mode')) {
        themeBtn.textContent = '화이트 모드';
    } else {
        themeBtn.textContent = '다크 모드';
    }
    
    // Save preference to localStorage
    localStorage.setItem('theme', body.classList.contains('dark-mode') ? 'dark' : 'light');
});

// Load saved theme
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
    themeBtn.textContent = '화이트 모드';
}

// Form Submission Handling (Formspree Integration)
consultForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const submitBtn = consultForm.querySelector('.submit-btn');
    const originalBtnText = submitBtn.textContent;
    
    // Disable button to prevent multiple submissions
    submitBtn.disabled = true;
    submitBtn.textContent = '전송 중...';
    
    const formData = new FormData(consultForm);
    
    try {
        const response = await fetch(consultForm.action, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });

        const result = await response.json();

        if (response.ok) {
            // Show success message
            consultForm.classList.add('hidden');
            successMsg.classList.remove('hidden');
            console.log('Consultation Request Sent Successfully');
        } else {
            // Log server-side validation errors
            console.error('Server Error:', result);
            alert(result.errors ? result.errors.map(error => error.message).join(", ") : '문제가 발생했습니다. 다시 시도해 주세요.');
            submitBtn.disabled = false;
            submitBtn.textContent = originalBtnText;
        }
    } catch (error) {
        console.error('Submission Error:', error);
        alert('전송 중 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.');
        submitBtn.disabled = false;
        submitBtn.textContent = originalBtnText;
    }
});
