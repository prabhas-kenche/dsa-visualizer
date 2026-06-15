import {
  useState,
} from "react";

import ReactFlow from "reactflow";

import "reactflow/dist/style.css";

import bfs from "../../algorithms/bfs";
import dfs from "../../algorithms/dfs";

import {
  initialNodes,
  initialEdges,
} from "../../data/graphData";

import GraphControls from "../../components/GraphControls/GraphControls";

function GraphVisualizer() {
  const [nodes, setNodes] =
    useState(initialNodes);

  const [edges] =
    useState(initialEdges);

  const sleep = (ms) =>
    new Promise((resolve) =>
      setTimeout(resolve, ms)
    );

  const animateTraversal =
    async (order) => {
      const resetNodes =
        nodes.map((node) => ({
          ...node,
          style: {
            background:
              "#ffffff",
          },
        }));

      setNodes(resetNodes);

      for (const nodeId of order) {
        setNodes((prev) =>
          prev.map((node) =>
            node.id === nodeId
              ? {
                  ...node,
                  style: {
                    background:
                      "green",
                    color:
                      "white",
                  },
                }
              : node
          )
        );

        await sleep(800);
      }
    };

  const startBFS = () => {
    const order = bfs(
      nodes,
      edges
    );

    animateTraversal(order);
  };

  const startDFS = () => {
    const order = dfs(
      nodes,
      edges
    );

    animateTraversal(order);
  };

  return (
    <div
      style={{
        height: "80vh",
      }}
    >
      <h1
        style={{
          textAlign:
            "center",
        }}
      >
        Graph Visualizer
      </h1>

      <GraphControls
        startBFS={startBFS}
        startDFS={startDFS}
      />

      <ReactFlow
        nodes={nodes}
        edges={edges}
        fitView
      />
    </div>
  );
}

export default GraphVisualizer;