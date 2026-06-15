import "./LinkedListView.css";

function LinkedListView({
  list,
  highlightedIndex,
}) {
  return (
    <div className="list-container">
      {list.map((node, index) => (
        <div
          key={index}
          className={`node-wrapper ${
            highlightedIndex === index
              ? "highlight"
              : ""
          }`}
        >
          <div className="node">
            {node}
          </div>

          {index !==
            list.length - 1 && (
            <div className="arrow">
              →
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default LinkedListView;