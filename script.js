const audio = document.getElementById('radioStream');
const playBtn = document.querySelector('.listen-btn');

function togglePlay() {
    if (audio.paused) {
        audio.play();
        playBtn.innerText = "PAUSE";
        playBtn.style.background = "#000"; // Changes color when playing
    } else {
        audio.pause();
        playBtn.innerText = "LISTEN LIVE";
        playBtn.style.background = "#E63946"; // Back to Hit City Red
    }
}

playBtn.addEventListener('click', togglePlay);

// Keep your existing loadChart function below this...
