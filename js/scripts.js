// Language switcher for About Me
document.addEventListener("DOMContentLoaded", function() {
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

    // Create a canvas for animated polygon mesh
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

    // Animated mesh points
    const ctx = canvas.getContext("2d");
    const points = [];
    // Different shades of white
    const colors = [
        "rgba(255,255,255,0.95)",
        "rgba(245,245,245,0.85)",
        "rgba(230,230,230,0.75)",
        "rgba(220,220,220,0.65)",
        "rgba(210,210,210,0.55)"
    ];
    const meshRows = 7;
    const meshCols = 12;
    const spacingX = () => canvas.width / (meshCols - 1);
    const spacingY = () => canvas.height / (meshRows - 1);

    function initPoints() {
        points.length = 0;
        for (let y = 0; y < meshRows; y++) {
            for (let x = 0; x < meshCols; x++) {
                points.push({
                    baseX: x * spacingX(),
                    baseY: y * spacingY(),
                    x: x * spacingX(),
                    y: y * spacingY(),
                    dx: (Math.random() - 0.5) * 0.7,
                    dy: (Math.random() - 0.5) * 0.7,
                    color: colors[(x + y) % colors.length]
                });
            }
        }
    }
    initPoints();
    window.addEventListener("resize", initPoints);

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        // Animate points
        points.forEach(p => {
            p.x += p.dx * 0.5;
            p.y += p.dy * 0.5;
            // Softly return to base position
            p.x += (p.baseX - p.x) * 0.01;
            p.y += (p.baseY - p.y) * 0.01;
        });
        // Draw mesh
        for (let y = 0; y < meshRows - 1; y++) {
            for (let x = 0; x < meshCols - 1; x++) {
                const idx = y * meshCols + x;
                const p1 = points[idx];
                const p2 = points[idx + 1];
                const p3 = points[idx + meshCols];
                ctx.beginPath();
                ctx.moveTo(p1.x, p1.y);
                ctx.lineTo(p2.x, p2.y);
                ctx.lineTo(p3.x, p3.y);
                ctx.closePath();
                ctx.fillStyle = p1.color;
                ctx.fill();
                ctx.strokeStyle = p1.color;
                ctx.lineWidth = 1.5;
                ctx.stroke();
            }
        }
        requestAnimationFrame(animate);
    }
    animate();
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


// Three.js ML Cube: ensure DOM is ready and container exists
document.addEventListener("DOMContentLoaded", function() {
    // Load Montserrat font from Google Fonts
    const fontLink = document.createElement('link');
    fontLink.href = 'https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap';
    fontLink.rel = 'stylesheet';
    document.head.appendChild(fontLink);

    const container = document.getElementById('three-cube');
    if (!container) return;

    // Set larger size for the cube
    container.style.width = '600px';
    container.style.height = '600px';

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 600/600, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({antialias: true, alpha: true});
    renderer.setClearColor(0x000000, 0); // transparent background
    renderer.setSize(600, 600);
    container.appendChild(renderer.domElement);

    // Create canvas texture with custom text, smaller font for fit
    function createTextTexture(text) {
        const size = 256;
        const canvas = document.createElement('canvas');
        canvas.width = canvas.height = size;
        const ctx = canvas.getContext('2d');
        ctx.fillStyle = '#ffffffff';
        ctx.fillRect(0, 0, size, size);
        if (text === 'HAMBURGER_ICON') {
            // Draw hamburger icon (three horizontal bars)
            ctx.strokeStyle = '#222';
            ctx.lineWidth = 16;
            const barLength = size * 0.6;
            const barHeight = size * 0.18;
            const x = size * 0.2;
            const yStart = size * 0.32;
            for (let i = 0; i < 3; i++) {
                ctx.beginPath();
                ctx.moveTo(x, yStart + i * barHeight);
                ctx.lineTo(x + barLength, yStart + i * barHeight);
                ctx.stroke();
            }
        } else {
            ctx.font = 'bold 40px Montserrat, Arial, sans-serif';
            ctx.fillStyle = '#222';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(text, size/2, size/2); // perfectly centered
        }
        return new THREE.CanvasTexture(canvas);
    }

    const geometry = new THREE.BoxGeometry();
    // Order: [right, left, top, bottom, front, back]
    const materials = [
    new THREE.MeshBasicMaterial({map: createTextTexture('About')}),      // right
    new THREE.MeshBasicMaterial({map: createTextTexture('Portfolio')}),  // left
    new THREE.MeshBasicMaterial({map: createTextTexture('Experience')}), // top
    new THREE.MeshBasicMaterial({map: createTextTexture('Contact')}),    // bottom
    new THREE.MeshBasicMaterial({map: createTextTexture('HAMBURGER_ICON')}), // front
    ];
    const cube = new THREE.Mesh(geometry, materials);
    scene.add(cube);

    camera.position.z = 3;

    // Add simple mouse drag interaction
    let isDragging = false, prevX = 0, prevY = 0;
    renderer.domElement.addEventListener('mousedown', e => {
        isDragging = true;
        prevX = e.clientX;
        prevY = e.clientY;
    });
    window.addEventListener('mouseup', () => isDragging = false);
    window.addEventListener('mousemove', e => {
        if (isDragging) {
            cube.rotation.y += (e.clientX - prevX) * 0.01;
            cube.rotation.x += (e.clientY - prevY) * 0.01;
            prevX = e.clientX;
            prevY = e.clientY;
        }
    });

    function animate() {
        renderer.render(scene, camera);
        requestAnimationFrame(animate);
    }
    animate();
});