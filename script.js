window.addEventListener('load', () => {
    const audio = document.getElementById('mainPlayer');
    const playBtn = document.getElementById('playPauseBtn');
    const statusText = document.getElementById('trackTitle');

    playBtn.addEventListener('click', () => {
        if (audio.paused) {
            // Updated with your specific host, port, and mount point
            audio.src = "https://morcast.caster.fm:13754/xlK6B?t=" + new Date().getTime();
            
            statusText.innerText = "TUNING IN...";
            
            audio.play().then(() => {
                playBtn.innerText = "PAUSE";
                statusText.innerText = "HIT CITY LIVE 🔊";
            }).catch(e => {
                console.error("Connection failed:", e);
                statusText.innerText = "OFFLINE";
                alert("The station is currently offline. Is your BUTT app connected?");
            });
        } else {
            audio.pause();
            audio.src = ""; 
            playBtn.innerText = "LISTEN LIVE";
            statusText.innerText = "MORCAST STANDBY";
        }
    });
});
