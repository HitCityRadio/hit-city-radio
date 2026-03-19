const undergroundHits = [
    { rank: 1, artist: "Xenia Manasseh", title: "Sad Sad Sad", genre: "Soul" },
    { rank: 2, artist: "Kahush", title: "Skeletons In The Closet", genre: "Soul" },
    { rank: 3, artist: "SHLM ft. KamaWho", title: "Nairobian Girl", genre: "Arbantone" },
    { rank: 4, artist: "2wentysixx", title: "Wewe Ni Wangu", genre: "Soul" },
    { rank: 5, artist: "Ocho Madness", title: "Melanin", genre: "Drill" },
    { rank: 6, artist: "Badman Select x Ocho Madness", title: "Party Ni Party", genre: "Arbantone" },
    { rank: 7, artist: "Lengmann ft. Mad Mac", title: "Frustration", genre: "Drill" },
    { rank: 8, artist: "Toxic Lyrikali", title: "Backbencher", genre: "Drill" },
    { rank: 9, artist: "Frrmbanya", title: "Unspoken", genre: "Arbantone" },
    { rank: 10, artist: "Zaituni", title: "Tamu", genre: "Soul" }
];

function loadChart(filter = 'All') {
    const list = document.getElementById('chartList');
    if (!list) {
        console.error("Error: Could not find chartList div!");
        return;
    }
    const filtered = filter === 'All' ? undergroundHits : undergroundHits.filter(s => s.genre === filter);
    
    list.innerHTML = filtered.map(song => `
        <div class="song-card">
            <div class="song-meta">
                <span class="song-title">${song.rank}. ${song.title}</span>
                <span class="artist-name">${song.artist}</span>
                <span class="district">${song.genre} District</span>
            </div>
            <button class="nav-btn" style="color:white; font-size:10px;" onclick="alert('Voted for ${song.title}!')">VOTE</button>
        </div>
    `).join('');
}

function filterGenre(genre, btn) {
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    loadChart(genre);
}

// THIS PART RUNS AS SOON AS THE PAGE LOADS
document.addEventListener('DOMContentLoaded', () => {
    loadChart();
    const audio = document.getElementById('mainPlayer');
    const playBtn = document.getElementById('playPauseBtn');

    playBtn.addEventListener('click', () => {
        if (audio.paused) {
            audio.src = "https://shaincast.caster.fm:2199/tunein/morcast.mp3?t=" + new Date().getTime();
            audio.play().then(() => {
                playBtn.innerText = "PAUSE";
                document.getElementById('trackTitle').innerText = "MORCAST LIVE";
            }).catch(() => alert("Stream Offline. Start Caster.fm!"));
        } else {
            audio.pause();
            audio.src = "";
            playBtn.innerText = "LISTEN LIVE";
            document.getElementById('trackTitle').innerText = "MORCAST STANDBY";
        }
    });
});
