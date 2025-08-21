// Fade in and pop effect for #homeContent on page load
document.addEventListener("DOMContentLoaded", function() {
    const homeContent = document.getElementById("homeContent");
    if (homeContent) {
        homeContent.style.opacity = 0;
        homeContent.style.transform = "scale(0.92) rotate(-2deg)";
        homeContent.style.transition = "opacity 1.2s cubic-bezier(.77,0,.18,1), transform 1.2s cubic-bezier(.77,0,.18,1)";
        setTimeout(() => {
            homeContent.style.opacity = 1;
            homeContent.style.transform = "scale(1) rotate(0deg)";
        }, 200);
    }
});

// Supercharged hover effect: scale, rotate, rainbow border, glowing shadow, text color change, and shake
const homeContent = document.getElementById("homeContent");
if (homeContent) {
    homeContent.addEventListener("mouseenter", function() {
        homeContent.style.boxShadow = "0 12px 48px 8px rgba(255,107,107,0.6), 0 0 0 10px #f7d71688";
        homeContent.style.transform = "scale(1.07) rotate(2deg)";
        homeContent.style.border = "4px solid";
        homeContent.style.borderImage = "linear-gradient(90deg, #ff6b6b, #f7d716, #6bffb8, #6b8cff, #b86bff) 1";
        homeContent.style.background = "linear-gradient(135deg, #fffbe6 60%, #e29561 100%)";
        homeContent.style.color = "#ff6b6b";
        homeContent.style.animation = "shake 0.5s cubic-bezier(.36,.07,.19,.97) 1";
    });
    homeContent.addEventListener("mouseleave", function() {
        homeContent.style.boxShadow = "0 2px 8px rgba(0,0,0,0.07)";
        homeContent.style.transform = "scale(1) rotate(0deg)";
        homeContent.style.border = "2px solid #ff6b6b";
        homeContent.style.borderImage = "";
        homeContent.style.background = "linear-gradient(135deg, #e29561 60%, #f7d716 100%)";
        homeContent.style.color = "#222";
        homeContent.style.animation = "";
    });
}

// Add keyframes for shake animation
const style = document.createElement('style');
style.innerHTML = `
@keyframes shake {
    10%, 90% { transform: scale(1.07) rotate(2deg) translateX(-1px); }
    20%, 80% { transform: scale(1.07) rotate(2deg) translateX(2px); }
    30%, 50%, 70% { transform: scale(1.07) rotate(2deg) translateX(-4px); }
    40%, 60% { transform: scale(1.07) rotate(2deg) translateX(4px); }
}
`;
document.head.appendChild(style);