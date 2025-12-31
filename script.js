// Countdown Logic
function updateCountdown() {
    const now = new Date();
    const newYear = new Date(now.getFullYear() + 1, 0, 1, 0, 0, 0); // Next Jan 1, 00:00
    const timeDiff = newYear - now;

    if (timeDiff <= 0) {
        // It's midnight! Trigger fireworks and message
        document.getElementById('fireworks').classList.remove('hidden');
        document.getElementById('new-year-message').classList.remove('hidden');
        // Start floating hearts
        startFloatingHearts();
        clearInterval(countdownInterval); // Stop countdown
        return;
    }

    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = days.toString().padStart(2, '0');
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
}

// Start countdown update every second
const countdownInterval = setInterval(updateCountdown, 1000);
updateCountdown(); // Initial call

// Floating Hearts Function (Called after midnight)
function startFloatingHearts() {
    setInterval(() => {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.textContent = '❤️';
        heart.style.left = Math.random() * 100 + 'vw';
        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 5000); // Remove after animation
    }, 500); // New heart every 0.5 seconds
}

// Music Play/Pause Functionality
const musicBtn = document.getElementById('music-btn');
const bgMusic = document.getElementById('bg-music');
let isPlaying = false;

// Auto-play music on page load (may be blocked by browser)
bgMusic.play().catch(() => {
    console.log('Auto-play blocked; use play button.');
});

musicBtn.addEventListener('click', () => {
    if (isPlaying) {
        bgMusic.pause();
        musicBtn.textContent = 'Play Music';
    } else {
        bgMusic.play();
        musicBtn.textContent = 'Pause Music';
    }
    isPlaying = !isPlaying;
});

// Surprise Button Functionality
const surpriseBtn = document.getElementById('surprise-btn');
const surpriseMessage = document.getElementById('surprise-message');

surpriseBtn.addEventListener('click', () => {
    surpriseMessage.classList.toggle('hidden');
});