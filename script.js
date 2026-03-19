const undergroundHits = [
    { rank: 1, artist: "Toxic Lyrikali", title: "Backbencher", area: "Drill District" },
    { rank: 2, artist: "Zaituni", title: "Tamu", area: "Soul Suburb" },
    { rank: 3, artist: "Frrmbanya", title: "Unspoken", area: "Arbantone" },
    { rank: 4, artist: "Rudra Kartel", title: "Bruk It Down", area: "Dancehall Drive" },
    { rank: 5, artist: "Muthaka", title: "Secret Files", area: "Alternative Alley" }
];

function loadChart() {
    const list = document.getElementById('chartList');
    list.innerHTML = undergroundHits.map(song => `
        <div class="song-card ${song.rank === 1 ? 'top-hit' : ''}">
            <div class="song-meta">
                <span class="song-title">${song.title}</span>
                <span class="artist-name">${song.artist}</span>
                <span class="district">${song.area}</span>
            </div>
            <div class="actions">
                <button class="btn-tip" onclick="alert('M-Pesa Flow coming soon!')">Tip 💸</button>
            </div>
        </div>
    `).join('');
    
    document.getElementById('trackTitle').innerText = `${undergroundHits[0].artist} - ${undergroundHits[0].title}`;
}

window.onload = loadChart;