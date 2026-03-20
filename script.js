// ... (keep your chart code at the top) ...

const publicToken = "7b28ffe0-7b66-4372-8f39-c8215fe4cc01";

playBtn.addEventListener('click', () => {
    if (audio.paused) {
        // This is the direct 'Cloud' link using your token
        audio.src = `https://hub.cloud.caster.fm/stream/${publicToken}/?t=${new Date().getTime()}`;
        
        statusText.innerText = "TUNING IN...";
        
        audio.play().then(() => {
            playBtn.innerText = "PAUSE";
            statusText.innerText = "HIT CITY LIVE 🔊";
            playBtn.style.background = "#222";
        }).catch(e => {
            console.error("Stream Error:", e);
            statusText.innerText = "OFFLINE";
            alert("Check your 'Streaming Server' tab—is the status Green?");
        });
    } else {
        audio.pause();
        audio.src = ""; 
        playBtn.innerText = "LISTEN LIVE";
        statusText.innerText = "MORCAST STANDBY";
        playBtn.style.background = "#E63946";
    }
});
