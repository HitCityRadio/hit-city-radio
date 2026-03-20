const undergroundHits = [
    { rank: 1, title: "Nairobi Nightlife", artist: "DJ Mor", plays: "1.5k" },
    { rank: 2, title: "Cloud Nine", artist: "Skipper", plays: "1.3k" },
    { rank: 3, title: "Rally Vibes", artist: "WRC Mix", plays: "900" }
];

function loadChart() {
    const chartList = document.getElementById('chart-list');
    if (!chartList) return;
    
    chartList.innerHTML = undergroundHits.map(song => `
        <div style="display: flex; justify-content: space-between; padding: 15px; border-bottom: 1px solid #333;">
            <span><strong style="color: #E63946;">#${song.rank}</strong> ${song.title}</span>
            <span style="color: #888;">${song.artist}</span>
        </div>
    `).join('');
}

window.addEventListener('load', () => {
    loadChart();
    console.log("Morcast Engine: Online");
});
