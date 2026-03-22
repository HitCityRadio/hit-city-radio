// app.js

// Utility functions
function escapeHtml(text) {
    const div = document.createElement('div');
    div.innerText = text;
    return div.innerHTML;
}

// State Management Object
const state = {
    songQueue: [],
    listenerCount: 0,
    isDarkMode: false,
    volume: 100
};

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
    loadFromLocalStorage();
    initializeWebSocket();
    setupEventListeners();
    updateTheme();
});

// Load state from localStorage
function loadFromLocalStorage() {
    const savedQueue = JSON.parse(localStorage.getItem('songQueue')) || [];
    const savedVolume = localStorage.getItem('volume');
    const savedTheme = localStorage.getItem('isDarkMode');
    state.songQueue = savedQueue;
    state.volume = savedVolume ? parseInt(savedVolume) : 100;
    state.isDarkMode = savedTheme === 'true';
}

// Initialize WebSocket connection
function initializeWebSocket() {
    const socket = new WebSocket('wss://yourserver.com');
    socket.onmessage = (event) => {
        const data = JSON.parse(event.data);
        // Update listener count
        state.listenerCount = data.listenerCount;
        updateListenerCountDisplay();
    };
}

// Setup Event Listeners
function setupEventListeners() {
    document.getElementById('addSong').onclick = addSong;
    document.getElementById('removeSong').onclick = removeSong;
    document.getElementById('playButton').onclick = togglePlayPause;
    document.getElementById('volumeSlider').oninput = (e) => adjustVolume(e.target.value);
    document.getElementById('themeToggle').onclick = toggleTheme;
}

// Add song to queue
function addSong() {
    const link = document.getElementById('songLink').value;
    if (validateYouTubeLink(link)) {
        const videoId = extractVideoId(link);
        state.songQueue.push(videoId);
        localStorage.setItem('songQueue', JSON.stringify(state.songQueue));
        document.getElementById('songLink').value = '';
    } else {
        handleError('Invalid YouTube link.');
    }
}

// Remove song from queue
function removeSong() {
    const link = document.getElementById('songLink').value;
    const videoId = extractVideoId(link);
    state.songQueue = state.songQueue.filter(id => id !== videoId);
    localStorage.setItem('songQueue', JSON.stringify(state.songQueue));
}

// Validate YouTube link with regex
function validateYouTubeLink(link) {
    const regex = /^(https?:\/\/)?(www\.)?(youtube\.com\/watch\?v=|youtu.be\/)([a-zA-Z0-9_-]{11})$/;
    return regex.test(link);
}

// Extract video ID from YouTube link
function extractVideoId(link) {
    const match = link.match(/[?&]v=([^&#]*)/);
    return match ? match[1] : null;
}

// Update listener count display
function updateListenerCountDisplay() {
    document.getElementById('listenerCount').innerText = `Listeners: ${state.listenerCount}`;
}

// Toggle Theme
function toggleTheme() {
    state.isDarkMode = !state.isDarkMode;
    localStorage.setItem('isDarkMode', state.isDarkMode);
    updateTheme();
}

// Update the theme based on state
function updateTheme() {
    document.body.className = state.isDarkMode ? 'dark' : 'light';
}

// Error Handling
function handleError(message) {
    console.error(message);
    alert(message);
}  

// Audio Player Controls
function togglePlayPause() {
    const audio = document.getElementById('audioPlayer');
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}

// Adjust Volume
function adjustVolume(value) {
    const audio = document.getElementById('audioPlayer');
    audio.volume = value / 100;
    state.volume = value;
    localStorage.setItem('volume', value);
}