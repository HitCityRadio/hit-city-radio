// ... (keep your undergroundHits list at the top) ...

window.addEventListener('load', () => {
    loadChart();
    const audio = document.getElementById('mainPlayer');
    const playBtn = document.getElementById('playPauseBtn');
    const statusText = document.getElementById('trackTitle');

    // YOUR UNIQUE CLOUD TOKEN
    const publicToken = "7b28ffe0-7b66-4372-8f39-c8215fe4cc01";

    playBtn.addEventListener('click', () => {
        if (audio.paused) {
            // This URL uses your Public Token to find your live stream automatically
            audio.src = `https://hub.cloud.caster.fm/stream/${publicToken}/?t=${new Date().getTime()}`;
            
            statusText.innerText = "TUNING IN...";
            
            audio.play().then(() => {
                playBtn.innerText = "PAUSE";
                statusText.innerText = "MORCAST LIVE 🔊";
                playBtn.style.background = "#222";
            }).catch(e => {
                console.error("Stream Error:", e);
                statusText.innerText = "OFFLINE";
                alert("Radio is Offline. Please ensure your Broadcaster app says 'Connected'!");
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
