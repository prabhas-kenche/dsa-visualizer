import "./StatsPanel.css"

function StatsPanel ({
    comparisions,
    swaps,
    isSorting,
    completed
}) {
    return (
        <div className="stats-panel">
            <div className="stat-card">
                <h3>Comparisions</h3>
                <p>{comparisions}</p>
            </div>

            <div className="stat-card">
                <h3>Swaps</h3>
                <p>{swaps}</p>
            </div>

            <div className="stat-card">
                <h3>Status</h3>
                <p>{isSorting 
                    ? "Sorting..." 
                    : completed
                    ? "Completed"
                    : "Ready"
                }</p>
            </div>
        </div>
    )
}

export default StatsPanel;