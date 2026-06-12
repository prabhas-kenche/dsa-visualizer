import "./ComplexityPanel.css"

function ComplexityPanel({ algorithm }){

    const complexity = {
        bubble: {
            name: "Bubble Sort",
            best: "O(n)",
            average: "O(n^2)",
            worst: "O(n^2)",
            space: "O(1)",
        },

        selection: {
            name: "Selection Sort",
            best: "O(n^2)",
            average: "O(n^2)",
            worst: "O(n^2)",
            space: "O(1)",
        },

        insertion: {
            name: "Insertion Sort",
            best: "O(n)",
            average: "O(n^2)",
            worst: "O(n^2)",
            space: "O(1)",
        },
    };

    const data = complexity[algorithm];

    return (
        <div className="cpomplexity-panel">
            <h2>{data.name}</h2>
            <p>Best: {data.best}</p>
            <p>Average: {data.average}</p>
            <p>Worst: {data.worst}</p>
            <p>Space: {data.space}</p>
        </div>
    )
}

export default ComplexityPanel;