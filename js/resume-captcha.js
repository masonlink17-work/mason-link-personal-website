// Simple math captcha for resume download with slide-out effect and fade-in for download button
window.addEventListener('DOMContentLoaded', function() {
    const n1 = Math.floor(Math.random()*10+1);
    const n2 = Math.floor(Math.random()*10+1);
    document.getElementById('captchaNum1').textContent = n1;
    document.getElementById('captchaNum2').textContent = n2;
    document.getElementById('captchaCheckBtn').onclick = function() {
        const val = parseInt(document.getElementById('captchaInput').value, 10);
        if(val === n1 + n2) {
            // Slide captcha box to the right before hiding
            const box = document.getElementById('captchaBox');
            box.style.transition = 'transform 0.6s cubic-bezier(.77,0,.18,1), opacity 0.4s';
            box.style.transform = 'translateX(120vw)';
            box.style.opacity = '0';
            setTimeout(function() {
                box.style.display = 'none';
                const downloadBox = document.getElementById('downloadBtnBox');
                // Create the download link and button only after CAPTCHA is solved
                const a = document.createElement('a');
                a.href = '../files/LinkMason-Resume.pdf';
                a.download = 'LinkMason-Resume.pdf';
                a.rel = 'noopener noreferrer';
                a.setAttribute('aria-label', 'Download Mason Link Resume PDF');
                const btn = document.createElement('button');
                btn.id = 'resumeDownloadBtn';
                btn.textContent = 'Download PDF';
                a.appendChild(btn);
                downloadBox.appendChild(a);
                downloadBox.style.display = 'flex';
                // Force reflow to enable transition
                void downloadBox.offsetWidth;
                downloadBox.classList.add('visible');
            }, 600);
        } else {
            document.getElementById('captchaError').style.display = 'inline';
        }
    };
    document.getElementById('captchaInput').addEventListener('input', function() {
        document.getElementById('captchaError').style.display = 'none';
    });
});
