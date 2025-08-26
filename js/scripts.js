// Language switcher for About Me
document.addEventListener("DOMContentLoaded", function() {
    // LinkedIn logo click effect
    const linkedinLogo = document.querySelector('#linkedinLogoLink img');
    if (linkedinLogo) {
        linkedinLogo.style.transition = "transform 0.18s cubic-bezier(.77,0,.18,1)";
        linkedinLogo.addEventListener('mousedown', function(e) {
            linkedinLogo.style.transform = "scale(0.85)";
        });
        linkedinLogo.addEventListener('mouseup', function(e) {
            linkedinLogo.style.transform = "scale(1)";
        });
        linkedinLogo.addEventListener('mouseleave', function() {
            linkedinLogo.style.transform = "scale(1)";
        });
        // Add delay before following link
        linkedinLogo.parentElement.addEventListener('click', function(e) {
            e.preventDefault();
            linkedinLogo.style.transform = "scale(0.85)";
            setTimeout(() => {
                linkedinLogo.style.transform = "scale(1)";
                window.open(linkedinLogo.parentElement.href, '_blank');
            }, 220);
        });
    }
    // Down arrow scroll-to-bottom button (scroll only)
    const scrollBtn = document.getElementById("scrollDownBtn");
    if (scrollBtn) {
        // Only for about page, scroll to #homeContent
        if (window.location.pathname.includes("/about/")) {
            scrollBtn.addEventListener("click", function() {
                const homeContent = document.getElementById("homeContent");
                if (homeContent) {
                    window.scrollTo({ top: homeContent.offsetTop, behavior: "smooth" });
                }
            });
        } else {
            scrollBtn.addEventListener("click", function() {
                window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
            });
        }
        scrollBtn.addEventListener("mouseenter", function() {
            scrollBtn.querySelector("svg").style.transform = "scale(1.15) translateY(4px)";
            scrollBtn.querySelector("svg").style.transition = "transform 0.2s cubic-bezier(.77,0,.18,1)";
        });
        scrollBtn.addEventListener("mouseleave", function() {
            scrollBtn.querySelector("svg").style.transform = "scale(1) translateY(0)";
        });
    }
    const langSwitchBtn = document.getElementById("langSwitchBtn");
    const aboutTextContainer = document.getElementById("aboutTextContainer");
    const homeContent = document.getElementById("homeContent");
    let isKorean = false;
    const englishText = `
        <p>📖 I am a <strong>Computer Information Systems</strong> and <strong>Business Administration</strong> graduate from Colorado Christian University. I have a passion for coding, web design, and analytics. I excel in my work ethic and ability to work well alongside others.</p>
        <p>💻 I am certified in <strong>Python</strong>, <strong>C#</strong>, and <strong>HTML/CSS</strong>, as well as experienced in <strong>Data Networking & SQL</strong>, <strong>Cybersecurity</strong>, and have knowledge in <strong>analytics and management</strong>. I've also worked extensively in <strong>Java</strong>, designing quality and user-friendly applications to suit team needs.</p>
        <p>📊 I am certified in <strong>Microsoft Excel</strong>, and in <strong>SEO & Digital Marketing</strong> through HubSpot. I also have years of experience managing websites and online marketing independently.</p>
        <p>💼 My job experience includes <strong>web design</strong>, as well as roles in <strong>retail, landscaping & maintenance, and customer service</strong>. These experiences helped me develop a strong work ethic and excellent customer service skills. My technical hobbies include <strong>music production, graphic design, and video editing</strong>, with years of experience in <strong>FL Studio</strong> and Adobe Products such as <strong>Premiere Pro</strong> and <strong>Photoshop</strong>.</p>
    `;
    const koreanText = `
        <p>📖 저는 콜로라도 크리스천 대학교에서 <strong>컴퓨터 정보 시스템</strong>과 <strong>경영학</strong>을 전공했습니다. 코딩, 웹 디자인, 분석에 열정을 가지고 있으며, 뛰어난 근무 태도와 협업 능력을 갖추고 있습니다.</p>
        <p>💻 <strong>Python</strong>, <strong>C#</strong>, <strong>HTML/CSS</strong> 자격증을 보유하고 있으며, <strong>데이터 네트워킹 & SQL</strong>, <strong>사이버 보안</strong> 경험이 있고, <strong>분석 및 경영</strong>에 대한 지식도 있습니다. 또한 <strong>Java</strong>로 팀의 요구에 맞는 품질 높은 사용자 친화적 애플리케이션을 설계한 경험이 있습니다.</p>
        <p>📊 <strong>Microsoft Excel</strong> 자격증과 HubSpot을 통한 <strong>SEO & 디지털 마케팅</strong> 인증을 보유하고 있습니다. 수년간 웹사이트 및 온라인 마케팅을 독립적으로 관리한 경험도 있습니다.</p>
        <p>💼 <strong>웹 디자인</strong>뿐만 아니라 <strong>소매, 조경 및 유지보수, 고객 서비스</strong> 분야에서 근무한 경험이 있습니다. 이러한 경험을 통해 강한 근무 태도와 뛰어난 고객 서비스 능력을 개발했습니다. 기술적 취미로는 <strong>음악 제작, 그래픽 디자인, 영상 편집</strong>이 있으며, <strong>FL Studio</strong>와 <strong>Premiere Pro</strong>, <strong>Photoshop</strong> 등 Adobe 제품을 수년간 다뤄왔습니다.</p>
    `;
    if (langSwitchBtn && aboutTextContainer && homeContent) {
        langSwitchBtn.addEventListener("click", function() {
            // Switch language
            if (!isKorean) {
                aboutTextContainer.innerHTML = koreanText;
                langSwitchBtn.textContent = "View in English";
                isKorean = true;
            } else {
                aboutTextContainer.innerHTML = englishText;
                langSwitchBtn.textContent = "한국어로 보기";
                isKorean = false;
            }
            // Refresh animation
            homeContent.style.opacity = 0;
            homeContent.style.transform = "scale(0.92) rotate(-2deg)";
            setTimeout(() => {
                homeContent.style.opacity = 1;
                homeContent.style.transform = "scale(1) rotate(0deg)";
            }, 200);
        });
    }
});
document.addEventListener("DOMContentLoaded", function() {
    const homeContent = document.getElementById("homeContent");
    if (homeContent) {
        // Fade in and pop effect
        homeContent.style.opacity = 0;
        homeContent.style.transform = "scale(0.92) rotate(-2deg)";
        homeContent.style.transition = "opacity 1.2s cubic-bezier(.77,0,.18,1), transform 1.2s cubic-bezier(.77,0,.18,1)";
        setTimeout(() => {
            homeContent.style.opacity = 1;
            homeContent.style.transform = "scale(1) rotate(0deg)";
        }, 200);

        // Supercharged hover effect
        homeContent.addEventListener("mouseenter", function() {
            homeContent.style.transform = "scale(1.07) rotate(2deg)";
            homeContent.style.animation = "shake 0.5s cubic-bezier(.36,.07,.19,.97) 1";
        });
        homeContent.addEventListener("mouseleave", function() {
            homeContent.style.transform = "scale(1) rotate(0deg)";
            homeContent.style.animation = "";
        });
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const homeContent = document.getElementById("homeContent");
    if (homeContent) {
        // Fade in and pop effect
        homeContent.style.opacity = 0;
        homeContent.style.transform = "scale(0.92) rotate(-2deg)";
        homeContent.style.transition = "opacity 1.2s cubic-bezier(.77,0,.18,1), transform 1.2s cubic-bezier(.77,0,.18,1)";
        setTimeout(() => {
            homeContent.style.opacity = 1;
            homeContent.style.transform = "scale(1) rotate(0deg)";
        }, 200);

        // Supercharged hover effect
        homeContent.addEventListener("mouseenter", function() {
            homeContent.style.transform = "scale(1.07) rotate(2deg)";
            homeContent.style.animation = "shake 0.5s cubic-bezier(.36,.07,.19,.97) 1";
        });
        homeContent.addEventListener("mouseleave", function() {
            homeContent.style.transform = "scale(1) rotate(0deg)";
            homeContent.style.animation = "";
        });
    }
});

document.addEventListener("DOMContentLoaded", function() {
    // Remove previous canvas if it exists
    const oldCanvas = document.getElementById("bgCanvas");
    if (oldCanvas) oldCanvas.remove();

    // Create a canvas for animated background
    const canvas = document.createElement("canvas");
    canvas.id = "bgCanvas";
    canvas.style.position = "fixed";
    canvas.style.top = "0";
    canvas.style.left = "0";
    canvas.style.width = "100vw";
    canvas.style.height = "100vh";
    canvas.style.zIndex = "-1";
    canvas.style.pointerEvents = "none";
    document.body.appendChild(canvas);

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Unknown Pleasures effect: animated wavy lines
    const ctx = canvas.getContext("2d");
    const lineCount = Math.floor(window.innerHeight / 38) + 8; // fewer lines
    const pointsPerLine = Math.floor(window.innerWidth / 32) + 32;
    let lines = [];

    function initLines() {
        lines = [];
        for (let i = 0; i < lineCount; i++) {
            let points = [];
            for (let j = 0; j < pointsPerLine; j++) {
                points.push({
                    x: (j / (pointsPerLine - 1)) * canvas.width,
                    baseY: ((i + 1) / (lineCount + 1)) * canvas.height,
                    y: ((i + 1) / (lineCount + 1)) * canvas.height,
                    phase: Math.random() * Math.PI * 2
                });
            }
            lines.push(points);
        }
    }
    initLines();
    window.addEventListener("resize", () => {
        resizeCanvas();
        initLines();
    });

    function animateLines(time) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.save();
    ctx.strokeStyle = "#fff";
    ctx.lineWidth = 1.1;
    ctx.shadowColor = "#222";
    ctx.shadowBlur = 8;
    for (let i = 0; i < lines.length; i++) {
        ctx.beginPath();
        for (let j = 0; j < lines[i].length; j++) {
            let pt = lines[i][j];
            // Synchronize the wave: all lines use the same time phase, only amplitude varies
            let offset = Math.sin((j / pointsPerLine) * Math.PI * 2 + time * 0.001) * (18 + i * 2.2);
            // Add a pulse in the center for the iconic look
            let center = canvas.width / 2;
            let dist = Math.abs(pt.x - center);
            let pulse = Math.exp(-dist * 0.002) * Math.sin(time * 0.002) * 18;
            pt.y = pt.baseY + offset + pulse;
            if (j === 0) ctx.moveTo(pt.x, pt.y);
            else ctx.lineTo(pt.x, pt.y);
        }
        ctx.stroke();
    }
    ctx.restore();
    requestAnimationFrame(animateLines);
    }
    animateLines(performance.now());
});

document.addEventListener("DOMContentLoaded", function() {
    const titleHome = document.getElementById("titleHome");
    if (titleHome) {
        titleHome.style.opacity = 0;
        titleHome.style.transform = "translateY(-20px)";
        titleHome.style.transition = "opacity 1s ease, transform 1s ease";
        setTimeout(() => {
            titleHome.style.opacity = 1;
            titleHome.style.transform = "translateY(0)";
        }, 200);
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const logo = document.getElementById("mlLogo");
    if (logo) {
        logo.style.transition = "transform 1s cubic-bezier(.77,0,.18,1)";
        setInterval(() => {
            logo.style.transform = "rotate(360deg)";
            setTimeout(() => {
                logo.style.transform = "rotate(0deg)";
            }, 1000); // Reset after 1 second
        }, 7000); // Spin every 7 seconds
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const titleHome = document.getElementById("titleHome");
    if (titleHome) {
        // scaling effect on click
        titleHome.addEventListener("click", function() {
            titleHome.style.transition = "transform 0.2s";
            titleHome.style.transform = "scale(1.08)";
            setTimeout(() => {
                titleHome.style.transform = "scale(1)";
            }, 180);
        });
    }
});


