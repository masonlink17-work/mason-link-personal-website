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