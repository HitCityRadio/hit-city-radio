// 1. DATA: The Real Nairobi Street Heat - March 20, 2026
const undergroundHits = [
    { rank: 1, artist: "Toxic Lyrikali x Mejja", title: "Manifest", area: "Drill District" },
    { rank: 2, artist: "Frrmbanya ft. Breeder", title: "Unspoken Salaton", area: "Arbantone" },
    { rank: 3, artist: "Rudra Kartel", title: "Bruk It Down", area: "Dancehall Drive" },
    { rank: 4, artist: "Dyana Cods ft. Scar Mkadinali", title: "Calipso", area: "Bar City" },
    { rank: 5, artist: "Sabi Wu", title: "Wacha Nirest", area: "Underground" }
];

// 2. THE LOADING FUNCTION
function loadChart() {
    const list = document.getElementById('chartList');
    if (!list) return;

    list.innerHTML = undergroundHits.map(song => `
        <div class="song-card ${song.rank === 1 ? 'top-hit' : ''}">
            <div class="song-meta">
                <span class="song-title">${song.rank}. ${song.title}</span>
                <span class="artist-name">${song.artist}</span>
                <span class="district">${song.area}</span>
            </div>
            <button class="vote-btn" style="padding: 8px 15px; font-size: 11px; background: #222; border: none; color: white; border-radius: 5px; cursor: pointer;" onclick="alert('Voting opens at 8 PM tonight!')">VOTE</button>
        </div>
    `).join('');
}

// 3. AUDIO LOGIC
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
