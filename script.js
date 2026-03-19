// 1. DATA: The Underground Top 5
const undergroundHits = [
    { rank: 1, artist: "Toxic Lyrikali", title: "Backbencher", area: "Drill District" },
    { rank: 2, artist: "Zaituni", title: "Tamu", area: "Soul Suburb" },
    { rank: 3, artist: "Frrmbanya", title: "Unspoken", area: "Arbantone" },
    { rank: 4, artist: "Rudra Kartel", title: "Bruk It Down", area: "Dancehall Drive" },
    { rank: 5, artist: "Muthaka", title: "Secret Files", area: "Alternative Alley" }
];

// 2. THE LOADING FUNCTION
function loadChart() {
    const list = document.getElementById('chartList');
    
    // Safety check: If the list isn't found, stop here
    if (!list) return;

    list.innerHTML = undergroundHits.map(song => `
        <div class="song-card ${song.rank === 1 ? 'top-hit' : ''}">
            <div class="song-meta">
                <span class="song-title">${song.rank}. ${song.title}</span>
                <span class="artist-name">${song.artist}</span>
                <span class="district">${song.area}</span>
            </div>
            <button class="listen-btn" style="padding: 8px 15px; font-size: 11px; background: #222;" onclick="alert('Voting opens soon!')">VOTE</button>
        </div>
    `).join('');
    
    console.log("Chart Loaded Successfully");
}

// 3. AUDIO LOGIC
// We wait for the DOM to be fully loaded before looking for buttons
document.addEventListener('DOMContentLoaded', () => {
    loadChart();

    const audio = document.getElementById('mainPlayer');
    const playBtn = document.getElementById('playPauseBtn');

    if (playBtn && audio) {
        playBtn.addEventListener('click', () => {
            if (audio.paused) {
                audio.play();
                playBtn.innerText = "PAUSE";
                playBtn.style.background = "#222";
            } else {
                audio.pause();
                playBtn.innerText = "LISTEN LIVE";
                playBtn.style.background = "#E63946";
            }
        });
    }
});
