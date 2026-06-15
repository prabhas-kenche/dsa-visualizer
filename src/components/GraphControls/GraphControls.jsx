import "./GraphControls.css";

function GraphControls({
  startBFS,
  startDFS,
}) {
  return (
    <div className="graph-controls">
      <button onClick={startBFS}>
        BFS
      </button>

      <button onClick={startDFS}>
        DFS
      </button>
    </div>
  );
}

export default GraphControls;