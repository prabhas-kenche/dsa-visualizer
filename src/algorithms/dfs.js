const dfs = (nodes, edges) => {
  const animations = [];

  const adjacency = {};

  nodes.forEach((node) => {
    adjacency[node.id] = [];
  });

  edges.forEach((edge) => {
    adjacency[edge.source].push(
      edge.target
    );

    adjacency[edge.target].push(
      edge.source
    );
  });

  const visited = new Set();

  function traverse(nodeId) {
    visited.add(nodeId);

    animations.push(nodeId);

    adjacency[nodeId].forEach(
      (neighbor) => {
        if (
          !visited.has(neighbor)
        ) {
          traverse(neighbor);
        }
      }
    );
  }

  traverse("1");

  return animations;
};

export default dfs;