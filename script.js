// 1. DATA: The Underground Top 5
const undergroundHits = [
    { rank: 1, artist: "Toxic Lyrikali", title: "Backbencher", area: "Drill District" },
    { rank: 2, artist: "Zaituni", title: "Tamu", area: "Soul Suburb" },
    { rank: 3, artist: "Frrmbanya", title: "Unspoken", area: "Arbantone" },
    { rank: 4, artist: "Big Yasa", title: "Ten Plus", area: "Pure Drill energy" },
    { rank: 5, artist: "MSabi Wu", title: "Wacha Nirest", area: "AThe current club banger" }
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
            <button class="listen-btn" style="padding: 8px 15px; font-size: 11px; background: #222;" onclick="alert('Voting opens soon!')">VOTE</button>
        </div>
    `).join('');
}

// 3. AUDIO LOGIC (Wait for page to load)
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
    } else {
        console.error("Missing audio element or play button!");
    }
});
