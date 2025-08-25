// Three.js ML Cube: ES Module version
import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.153.0/build/three.module.js';

// Load Montserrat font from Google Fonts
const fontLink = document.createElement('link');
fontLink.href = 'https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap';
fontLink.rel = 'stylesheet';
document.head.appendChild(fontLink);

const container = document.getElementById('three-cube');
if (!container) throw new Error('Cube container not found');
container.style.width = '600px';
container.style.height = '600px';
// Use parent (#cubeBackdrop) as drag area
const dragArea = container.parentElement.parentElement;
// Fade in effect to prevent clipping
setTimeout(() => {
    container.style.opacity = 1;
}, 200);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, 600/600, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({antialias: true, alpha: true});
renderer.setClearColor(0x000000, 0); // transparent background
renderer.setSize(600, 600);
container.appendChild(renderer.domElement);

function createTextTexture(text) {
    const size = 1024; // Increased from 256 for higher resolution
    const canvas = document.createElement('canvas');
    canvas.width = canvas.height = size;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#ffffffff';
    ctx.fillRect(0, 0, size, size);
    if (text === 'HAMBURGER_ICON') {
        ctx.strokeStyle = '#0a0a0aff';
        ctx.lineWidth = 32; // Scaled up for higher res
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.rect(size * 0.28, size * 0.28, size * 0.44, size * 0.44);
        ctx.stroke();
    } else {
        ctx.font = '160px Montserrat, Arial, sans-serif'; // Scaled up for higher res
        ctx.fillStyle = '#0a0a0aff';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(text, size/2, size/2);
    }
    return new THREE.CanvasTexture(canvas);
}


// Plane labels and navigation targets
const planeLabels = [
    'About',
    'Portfolio',
    'Experience',
    'Resume',
    'HAMBURGER_ICON',
    'Contact',
];
const planeLinks = [
    '/about',
    '/portfolio',
    '/experience',
    '/resume',
    '/',
    '/contact',
];


const planes = [];
const planeSize = 1.5;
const cubeGroup = new THREE.Group();
for (let i = 0; i < 6; i++) {
    const planeGeo = new THREE.PlaneGeometry(planeSize, planeSize);
    const planeMat = new THREE.MeshBasicMaterial({map: createTextTexture(planeLabels[i]), transparent: true});
    const plane = new THREE.Mesh(planeGeo, planeMat);
    plane.userData.index = i;
    // Position planes to form a cube, all facing outward
    switch (i) {
        case 0: // right
            plane.position.x = planeSize/2;
            plane.rotation.y = Math.PI/2;
            break;
        case 1: // left
            plane.position.x = -planeSize/2;
            plane.rotation.y = -Math.PI/2;
            break;
        case 2: // top
            plane.position.y = planeSize/2;
            plane.rotation.x = -Math.PI/2;
            break;
        case 3: // bottom
            plane.position.y = -planeSize/2;
            plane.rotation.x = Math.PI/2;
            break;
        case 4: // front (hamburger)
            plane.position.z = planeSize/2;
            plane.rotation.y = 0;
            break;
        case 5: // back
            plane.position.z = -planeSize/2;
            plane.rotation.y = Math.PI;
            break;
    }
    cubeGroup.add(plane);
    planes.push(plane);
}
scene.add(cubeGroup);

camera.position.z = 3;

let isDragging = false, prevX = 0, prevY = 0;
let autoRotate = true;
dragArea.addEventListener('mousedown', e => {
    isDragging = true;
    prevX = e.clientX;
    prevY = e.clientY;
    autoRotate = false;
});
window.addEventListener('mouseup', () => isDragging = false);
window.addEventListener('mousemove', e => {
    if (isDragging) {
        cubeGroup.rotation.y += (e.clientX - prevX) * 0.01;
        cubeGroup.rotation.x += (e.clientY - prevY) * 0.01;
        prevX = e.clientX;
        prevY = e.clientY;
    }
});

// Stop auto-rotation on touch
dragArea.addEventListener('touchstart', () => {
    autoRotate = false;
});

// Touch drag support for mobile
let touchDragging = false, lastTouchX = 0, lastTouchY = 0;
dragArea.addEventListener('touchstart', e => {
    autoRotate = false;
    if (e.touches.length === 1) {
        touchDragging = true;
        lastTouchX = e.touches[0].clientX;
        lastTouchY = e.touches[0].clientY;
    }
}, {passive: false});
dragArea.addEventListener('touchend', () => {
    touchDragging = false;
});
dragArea.addEventListener('touchmove', e => {
    if (touchDragging && e.touches.length === 1) {
        const touch = e.touches[0];
        cubeGroup.rotation.y += (touch.clientX - lastTouchX) * 0.01;
        cubeGroup.rotation.x += (touch.clientY - lastTouchY) * 0.01;
        lastTouchX = touch.clientX;
        lastTouchY = touch.clientY;
        e.preventDefault();
    }
}, {passive: false});

function animate() {
    if (autoRotate) {
        cubeGroup.rotation.y += 0.008;
        cubeGroup.rotation.x += 0.003;
    }
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
}
animate();

const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();


renderer.domElement.addEventListener('click', function(event) {
    const rect = renderer.domElement.getBoundingClientRect();
    mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(planes);
    if (intersects.length > 0) {
        // Minimize cube effect
        // Smooth minimize effect
        const planeIndex = intersects[0].object.userData.index;
        let start = null;
        const duration = 320;
        const minScale = 0.88;
        const maxScale = 1;
        function animateScale(ts) {
            if (!start) start = ts;
            const elapsed = ts - start;
            let scale;
            if (elapsed < duration/2) {
                // Ease out to minScale
                scale = maxScale - (maxScale - minScale) * (elapsed/(duration/2));
            } else if (elapsed < duration) {
                // Ease in back to maxScale
                scale = minScale + (maxScale - minScale) * ((elapsed-duration/2)/(duration/2));
            } else {
                scale = maxScale;
            }
            cubeGroup.scale.set(scale, scale, scale);
            if (elapsed < duration) {
                requestAnimationFrame(animateScale);
            } else {
                if (typeof planeIndex !== 'undefined' && planeLinks[planeIndex]) {
                    window.location.href = planeLinks[planeIndex];
                }
            }
        }
        requestAnimationFrame(animateScale);
    }
});

// Touch tap support for cube face selection
renderer.domElement.addEventListener('touchend', function(event) {
    if (event.changedTouches.length === 1) {
        const touch = event.changedTouches[0];
        const rect = renderer.domElement.getBoundingClientRect();
        mouse.x = ((touch.clientX - rect.left) / rect.width) * 2 - 1;
        mouse.y = -((touch.clientY - rect.top) / rect.height) * 2 + 1;
        raycaster.setFromCamera(mouse, camera);
        const intersects = raycaster.intersectObjects(planes);
        if (intersects.length > 0) {
            const planeIndex = intersects[0].object.userData.index;
            let start = null;
            const duration = 320;
            const minScale = 0.88;
            const maxScale = 1;
            function animateScale(ts) {
                if (!start) start = ts;
                const elapsed = ts - start;
                let scale;
                if (elapsed < duration/2) {
                    scale = maxScale - (maxScale - minScale) * (elapsed/(duration/2));
                } else if (elapsed < duration) {
                    scale = minScale + (maxScale - minScale) * ((elapsed-duration/2)/(duration/2));
                } else {
                    scale = maxScale;
                }
                cubeGroup.scale.set(scale, scale, scale);
                if (elapsed < duration) {
                    requestAnimationFrame(animateScale);
                } else {
                    if (typeof planeIndex !== 'undefined' && planeLinks[planeIndex]) {
                        window.location.href = planeLinks[planeIndex];
                    }
                }
            }
            requestAnimationFrame(animateScale);
        }
    }
}, {passive: false});
