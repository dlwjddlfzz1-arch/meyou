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

// Form Submission Handling
consultForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const submitBtn = consultForm.querySelector('.submit-btn');
    const originalBtnText = submitBtn.textContent;
    const emailTo = 'dlwjddlfzz2@naver.com';
    
    submitBtn.disabled = true;
    submitBtn.textContent = '전송 중...';
    
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    
    try {
        // Formspree API Endpoint (corrected format)
        const response = await fetch(`https://formspree.io/f/mqakppov`, { // 이 ID는 임시 ID입니다. 직접 이메일 주소를 넣는 것보다 안전합니다.
            method: 'POST',
            body: JSON.stringify({ name, phone }),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        });

        if (response.ok) {
            consultForm.classList.add('hidden');
            successMsg.classList.remove('hidden');
        } else {
            throw new Error('전송 실패');
        }
    } catch (error) {
        console.error('Error:', error);
        // Fallback: 이메일 전송이 실패할 경우, 사용자의 메일 앱을 열어주는 안전장치
        if (confirm('온라인 전송에 문제가 발생했습니다. 확인을 누르시면 메일 작성 창을 통해 신청하실 수 있습니다.')) {
            const subject = encodeURIComponent('[상담 신청] 태아보험 가이드');
            const bodyContent = encodeURIComponent(`성함: ${name}\n연락처: ${phone}`);
            window.location.href = `mailto:${emailTo}?subject=${subject}&body=${bodyContent}`;
        }
        submitBtn.disabled = false;
        submitBtn.textContent = originalBtnText;
    }
});
