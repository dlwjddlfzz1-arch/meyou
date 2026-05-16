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
            // Show success message
            consultForm.classList.add('hidden');
            successMsg.classList.remove('hidden');
            console.log('Consultation Request Sent Successfully');
        } else {
            alert('문제가 발생했습니다. 다시 시도해 주세요.');
        }
    } catch (error) {
        console.error('Submission Error:', error);
        alert('네트워크 오류가 발생했습니다.');
    }
});
