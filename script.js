const undergroundHits = [
    { rank: 1, artist: "Toxic Lyrikali", title: "Backbencher", genre: "Drill" },
    { rank: 2, artist: "Zaituni", title: "Tamu", genre: "Soul" },
    { rank: 3, artist: "Frrmbanya", title: "Unspoken", genre: "Arbantone" },
    { rank: 4, artist: "Big Yasa", title: "Ten Plus", genre: "Drill" },
    { rank: 5, artist: "Muthaka", title: "Secret Files", genre: "Soul" },
    { rank: 6, artist: "Rudra Kartel", title: "Bruk It Down", genre: "Arbantone" },
    { rank: 7, artist: "Dyana Cods", title: "Calipso", genre: "Drill" },
    { rank: 8, artist: "Sabi Wu", title: "Wacha Nirest", genre: "Drill" },
    { rank: 9, artist: "Boutross", title: "Miss Those Days", genre: "Soul" },
    { rank: 10, artist: "Buruklyn Boyz", title: "Nairobi", genre: "Drill" }
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
            <button class="vote-btn" onclick="alert('Voted for ${song.title}!')">VOTE</button>
        </div>
    `).join('');
}

function filterGenre(genre) {
    loadChart(genre);
}

document.addEventListener('DOMContentLoaded', () => {
    loadChart();
    const audio = document.getElementById('mainPlayer');
    const playBtn = document.getElementById('playPauseBtn');

    if (playBtn && audio) {
        playBtn.addEventListener('click', () => {
            if (audio.paused) {
                // For Caster.fm Free, we sometimes need to 'kick' the source
                audio.load(); 
                audio.play();
                playBtn.innerText = "PAUSE";
            } else {
                audio.pause();
                playBtn.innerText = "LISTEN LIVE";
            }
        });
    }
});
