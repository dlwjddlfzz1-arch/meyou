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

// Form Submission (Google Sheets Integration)
if (consultForm) {
    consultForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const submitBtn = consultForm.querySelector('.minimal-btn');
        const originalBtnText = submitBtn.textContent;
        
        // 구글 앱스 스크립트 배포 후 받을 URL을 여기에 넣어야 합니다.
        // 우선 구조를 잡아드립니다.
        const GOOGLE_SCRIPT_URL = '여기에_배포된_웹앱_URL을_넣으세요'; 
        
        submitBtn.disabled = true;
        submitBtn.textContent = '기록 중...';
        
        const name = consultForm.querySelector('[name="name"]').value;
        const comment = consultForm.querySelector('[name="comment"]').value;
        
        try {
            // 구글 시트는 보안상 JSONP나 no-cors 처리가 필요할 수 있습니다.
            // 가장 깔끔한 방법은 구글 앱스 스크립트 웹 앱 주소로 직접 보내는 것입니다.
            const response = await fetch(GOOGLE_SCRIPT_URL, {
                method: 'POST',
                mode: 'no-cors', // 구글 시트 전송 시 필수 설정인 경우가 많습니다.
                cache: 'no-cache',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, comment, timestamp: new Date().toLocaleString() })
            });

            // mode: 'no-cors'일 경우 응답 내용을 읽을 수 없으므로 성공으로 가정하거나 
            // 구글 시트 설정을 통해 처리합니다. 
            consultForm.classList.add('hidden');
            successMsg.classList.remove('hidden');
            console.log('Data sent to Google Sheets');

        } catch (error) {
            console.error('Error:', error);
            alert('기록 중 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.');
            submitBtn.disabled = false;
            submitBtn.textContent = originalBtnText;
        }
    });
}
