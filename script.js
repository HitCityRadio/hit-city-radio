window.addEventListener('load', () => {
    const audio = document.getElementById('mainPlayer');
    const playBtn = document.getElementById('playPauseBtn');
    const statusText = document.getElementById('trackTitle');

    // Your Unique Cloud ID
    const publicToken = "7b28ffe0-7b66-4372-8f39-c8215fe4cc01";

    playBtn.addEventListener('click', () => {
        if (audio.paused) {
            // Updated 2026 Cloud Stream Endpoint
            audio.src = `https://hub.cloud.caster.fm/stream/${publicToken}/?t=${new Date().getTime()}`;
            
            statusText.innerText = "TUNING IN...";
            
            audio.play().then(() => {
                playBtn.innerText = "PAUSE";
                statusText.innerText = "MORCAST LIVE 🔊";
            }).catch(e => {
                statusText.innerText = "OFFLINE";
                console.error("Connection failed. Is your broadcaster app connected?");
            });
        } else {
            audio.pause();
            audio.src = ""; 
            playBtn.innerText = "LISTEN LIVE";
            statusText.innerText = "MORCAST STANDBY";
        }
    });
});
