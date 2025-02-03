const disc = document.getElementById('disc');
const frames = 24; // 0° to 345° in 15° steps
let currentFrame = 0;
let autoRotate = false;

document.addEventListener('keydown', (event) => {
    if (event.repeat === false) {
        if (event.key === 'l') {
            updateFrame('left');
        } else if (event.key === 'r') {
            updateFrame('right');
        } else if (event.key === 'a') {
            autoRotate = !autoRotate;

            if (autoRotate) {
                startAutoRotation();
            }
        }
    }
});

function updateFrame(direction) {
    if (direction === 'left') {
        currentFrame = (currentFrame - 1 + frames) % frames;
    } else if (direction === 'right') {
        currentFrame = (currentFrame + 1) % frames;
    }

    disc.src = `assets/frame_${currentFrame}.png`;
}

function startAutoRotation() {
    if (autoRotate) {
        updateFrame('right');
        setTimeout(startAutoRotation, 40);
    }
}

