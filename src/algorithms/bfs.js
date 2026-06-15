const bfs = (nodes, edges) => {
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

  const queue = ["1"];

  const visited = new Set();

  visited.add("1");

  while (queue.length) {
    const current =
      queue.shift();

    animations.push(current);

    adjacency[current].forEach(
      (neighbor) => {
        if (
          !visited.has(neighbor)
        ) {
          visited.add(
            neighbor
          );

          queue.push(
            neighbor
          );
        }
      }
    );
  }

  return animations;
};

export default bfs;