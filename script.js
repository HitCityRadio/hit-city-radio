const undergroundHits = [
    { rank: 1, artist: "Prince Indah", title: "Rapudo", genre: "Soul" },
    { rank: 2, artist: "Toxic Lyrikali x Mejja", title: "Manifest", genre: "Drill" },
    { rank: 3, artist: "Frrmbanya ft. Breeder", title: "Unspoken Salaton", genre: "Arbantone" },
    { rank: 4, artist: "Collo Blue", title: "Up Burukanga", genre: "Arbantone" },
    { rank: 5, artist: "Rudra Kartel", title: "Bruk It Down", genre: "Arbantone" },
    { rank: 6, artist: "Mbosso", title: "Pawa", genre: "Soul" },
    { rank: 7, artist: "Dyana Cods ft. Scar Mkadinali", title: "Calipso", genre: "Drill" },
    { rank: 8, artist: "Virusi Mbaya", title: "Itoka Ilitoka", genre: "Drill" },
    { rank: 9, artist: "Wakadinali", title: "Lifestyle", genre: "Drill" },
    { rank: 10, artist: "Zaituni", title: "Tamu", genre: "Soul" }
];

function loadChart(filter = 'All') {
    const list = document.getElementById('chartList');
    if (!list) return;
    const filtered = filter === 'All' ? undergroundHits : undergroundHits.filter(s => s.genre === filter);
    list.innerHTML = filtered.map(song => `
        <div class="song-card">
            <div class="song-meta">
                <span class="song-title">${song.rank}. ${song.title}</span>
                <span class="artist-name">${song.artist}</span>
                <span class="district">${song.genre} District</span>
            </div>
            <button class="nav-btn" style="color:white; font-size:10px;" onclick="alert('Voted!')">VOTE</button>
        </div>
    `).join('');
}

function filterGenre(genre, btn) {
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    loadChart(genre);
}

document.addEventListener('DOMContentLoaded', () => {
    loadChart();
    const audio = document.getElementById('mainPlayer');
    const playBtn = document.getElementById('playPauseBtn');

    playBtn.addEventListener('click', () => {
        if (audio.paused) {
            // THE FIX: Adding a timestamp forces a fresh secure connection to your stream
            audio.src = "https://shaincast.caster.fm:2199/tunein/morcast.mp3?t=" + new Date().getTime();
            audio.play().then(() => {
                playBtn.innerText = "PAUSE";
                playBtn.style.background = "#222";
            }).catch(() => alert("Station is Offline. Start server in Caster.fm!"));
        } else {
            audio.pause();
            audio.src = "";
            playBtn.innerText = "LISTEN LIVE";
            playBtn.style.background = "#E63946";
        }
    });
});
