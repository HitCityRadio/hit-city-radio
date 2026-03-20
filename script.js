// ... (keep your undergroundHits list at the top) ...

window.addEventListener('load', () => {
    loadChart();
    const audio = document.getElementById('mainPlayer');
    const playBtn = document.getElementById('playPauseBtn');
    const statusText = document.getElementById('trackTitle');

    playBtn.addEventListener('click', () => {
        if (audio.paused) {
            // Updated Secure Stream URL for 'morcast'
            audio.src = "https://shaincast.caster.fm:2199/listen.mp3?endpoint=morcast&t=" + new Date().getTime();
            
            statusText.innerText = "TUNING IN...";
            
            audio.play().then(() => {
                playBtn.innerText = "PAUSE";
                statusText.innerText = "MORCAST LIVE 🔊";
                playBtn.style.background = "#222";
            }).catch(e => {
                console.error("Stream Error:", e);
                statusText.innerText = "OFFLINE";
                alert("Radio is Offline. 1. Open your 'morcast' Broadcaster. 2. Hit Connect. 3. Play Music!");
            });
        } else {
            audio.pause();
            audio.src = ""; 
            playBtn.innerText = "LISTEN LIVE";
            statusText.innerText = "MORCAST STANDBY";
            playBtn.style.background = "#E63946";
        }
    });
});
