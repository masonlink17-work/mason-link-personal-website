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
    const size = 256;
    const canvas = document.createElement('canvas');
    canvas.width = canvas.height = size;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#ffffffff';
    ctx.fillRect(0, 0, size, size);
    if (text === 'HAMBURGER_ICON') {
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
        ctx.fillText(text, size/2, size/2);
    }
    return new THREE.CanvasTexture(canvas);
}


// Plane labels and navigation targets
const planeLabels = [
    'About',
    'Portfolio',
    'Experience',
    'Contact',
    'HAMBURGER_ICON',
    'Resume',
];
const planeLinks = [
    '/about',
    '/portfolio',
    '/experience',
    '/contact',
    '/',
    '/resume',
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
renderer.domElement.addEventListener('mousedown', e => {
    isDragging = true;
    prevX = e.clientX;
    prevY = e.clientY;
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

function animate() {
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
        const planeIndex = intersects[0].object.userData.index;
        if (typeof planeIndex !== 'undefined' && planeLinks[planeIndex]) {
            window.location.href = planeLinks[planeIndex];
        }
    }
});
