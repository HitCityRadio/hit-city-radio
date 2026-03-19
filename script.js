playBtn.addEventListener('click', () => {
    if (audio.paused) {
        // This "reloads" your Morcast stream so it's live
        audio.src = "http://shaincast.caster.fm:2199/tunein/morcast.mp3"; 
        audio.load();
        audio.play();
        playBtn.innerText = "PAUSE";
    } else {
        audio.pause();
        playBtn.src = ""; // Stops the data usage
        playBtn.innerText = "LISTEN LIVE";
    }
});
