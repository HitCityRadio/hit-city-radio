// MORCAST HIT CITY - MAIN LOGIC 2026
const undergroundHits = [
    { rank: 1, title: "Nairobi Nightlife", artist: "DJ Mor", plays: 1502 },
    { rank: 2, title: "Cloud Nine", artist: "Skipper", plays: 1340 },
    // ... add your other 8 hits here
];

function loadChart() {
    const chartList = document.getElementById('chart-list');
    if (!chartList) return;
    
    chartList.innerHTML = undergroundHits.map(song => `
        <div class="chart-item">
            <span class="rank">#${song.rank}</span>
            <span class="details"><strong>${song.title}</strong> - ${song.artist}</span>
            <span class="plays">${song.plays} streams</span>
        </div>
    `).join('');
}

// Run on Load
window.addEventListener('load', () => {
    loadChart();
    console.log("Hit City Radio: System Online");
});
