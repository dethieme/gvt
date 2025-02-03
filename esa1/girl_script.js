const sprite = document.getElementById('sprite');
const frameWidth = 39;
const totalFrames = 8;
let currentSpriteFrame = 0;

function animateSprite() {
    const xOffset = (currentSpriteFrame * frameWidth);
    sprite.style.transform = `translateX(-${xOffset}px)`;
    currentSpriteFrame = (currentSpriteFrame + 1) % totalFrames;
}

setInterval(animateSprite, 140);