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
consultForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    
    // In a real application, you would send this data to a server
    console.log('Consultation Request:', { name, phone });
    
    // Show success message
    consultForm.classList.add('hidden');
    successMsg.classList.remove('hidden');
    
    // Optional: Reset form after some time and show it again
    /*
    setTimeout(() => {
        consultForm.reset();
        consultForm.classList.remove('hidden');
        successMsg.classList.add('hidden');
    }, 5000);
    */
});
