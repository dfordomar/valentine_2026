// Array of strings to display in clouds
let cloudMessages = [
    'kind',
    'hilarious',
    'smart',
    'beautiful',
    'amazing',
    'thoughtful',
    'patient',
    'sympathetic',
    'adventurous',
    'creative',
    'Batalie',
    'the best at throwing water bottles',
    'inspiring',
    'supportive',
    'caring',
    'funny',
    'generous',
    'gorgeous',
    'sexy',
    'talented',
    'strong',
    'my best friend',
    'constantly thinking of others',
    'the best view when I wake up',
    'an unbelievable designer',
    'the best cuddler',
    'my favorite person to talk to',
    'the only person I want to share my life with',
    'empathetic',
    'the best scratcher',
    'the best at cracking my back',
    'brave',
    'home',
    'my best friend',
    'such a good listener',
    'a great sister',
    'a great daughter',
    'a hard worker',
    'constantly learning',
    'trying your best',
    'Natalie'   
];

// Shuffle the messages array so order is random each time
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
shuffleArray(cloudMessages);

let clickCount = 0;
let messageIndex = 0;
let revertTimeout = null;

const button = document.querySelector('.flower-pot-button');
const buttonText = document.querySelector('.button-text');
const cloudsContainer = document.querySelector('.clouds-container');

button.addEventListener('click', () => {
    if (button.classList.contains('disabled')) return;

    // Toggle text between "definitely" and "defiantly"
    const toggleWord = buttonText.querySelector('.toggle-word');
    if (toggleWord && toggleWord.textContent === 'definitely') {
        toggleWord.textContent = 'defiantly';
        toggleWord.style.fontWeight = '900';
        button.classList.add('disabled');
        // Spawn only one cloud with text when toggled to 'defiantly'
        createCloud();
        setTimeout(() => {
            toggleWord.textContent = 'definitely';
            toggleWord.style.fontWeight = '700';
            button.classList.remove('disabled');
        }, 1500); // 1.5 seconds
        return;
    } else if (toggleWord && toggleWord.textContent === 'defiantly') {
        toggleWord.textContent = 'definitely';
        toggleWord.style.fontWeight = '700';
        button.classList.remove('disabled');
    }

    // Spawn cloud
    createCloud();
});

function createCloud() {
    const cloud = document.createElement('div');
    cloud.classList.add('cloud');
    // Random position in upper part of screen
    const randomLeft = Math.random() * (window.innerWidth - 200);
    const randomTop = Math.random() * (window.innerHeight * 0.4) + 50;
    cloud.style.left = randomLeft + 'px';
    cloud.style.top = randomTop + 'px';
    // Get message from array
    const message = cloudMessages[messageIndex % cloudMessages.length];
    messageIndex++;
    const cloudText = document.createElement('div');
    cloudText.classList.add('cloud-text');
    cloudText.textContent = message;
    cloud.appendChild(cloudText);
    cloudsContainer.appendChild(cloud);
    // Remove cloud after a longer delay
    setTimeout(() => {
        cloud.style.opacity = '0';
        cloud.style.transition = 'opacity 0.6s ease-out';
        setTimeout(() => cloud.remove(), 600);
    }, 9000);
}

// Helper function to adjust color brightness
function adjustColor(color, percent) {
    const num = parseInt(color.replace('#', ''), 16);
    const amt = Math.round(2.55 * percent);
    const R = Math.max(0, Math.min(255, (num >> 16) + amt));
    const G = Math.max(0, Math.min(255, (num >> 8 & 0x00FF) + amt));
    const B = Math.max(0, Math.min(255, (num & 0x0000FF) + amt));
    return '#' + (0x1000000 + R * 0x10000 + G * 0x100 + B).toString(16).slice(1);
}
