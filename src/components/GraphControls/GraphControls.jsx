import "./GraphControls.css";

function GraphControls({
  startBFS,
  startDFS,
  addNode,
  addEdge,
  deleteNode,
  deleteEdge,
  saveGraph,
  loadGraph,
  resetGraph,
}) {
  return (
    <div className="graph-controls">
      <button onClick={startBFS}>
        BFS
      </button>

      <button onClick={startDFS}>
        DFS
      </button>

      <button onClick={addNode}>
        Add Node
      </button>

      <button onClick={addEdge}>
        Add Edge
      </button>

      <button onClick={deleteNode}>
        Delete Node
      </button>

      <button onClick={deleteEdge}>
        Delete Edge
      </button>

      <button onClick={saveGraph}>
        Save
      </button>

      <button onClick={loadGraph}>
        Load
      </button>

      <button onClick={resetGraph}>
        Reset
      </button>
    </div>
  );
}

export default GraphControls;