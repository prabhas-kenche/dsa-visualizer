import {
  useState,
} from "react";

import ReactFlow, { addEdge, Background, Controls } from "reactflow";

import "reactflow/dist/style.css";

import { FaArrowRight } from "react-icons/fa";

import bfs from "../../algorithms/bfs";
import dfs from "../../algorithms/dfs";
import AlgorithmInfo from "../../components/AlgorithmInfo/AlgorithmInfo";

import {
  initialNodes,
  initialEdges,
} from "../../data/graphData";

import GraphControls from "../../components/GraphControls/GraphControls";

function GraphVisualizer() {
  const [nodes, setNodes] =
    useState(initialNodes);

  const [edges, setEdges] =
    useState(initialEdges);

  const [traversalOrder, setTraversalOrder] = 
    useState([]);

  const sleep = (ms) =>
    new Promise((resolve) =>
      setTimeout(resolve, ms)
    );

  const onConnect = (params) => {
    setEdges((eds) =>
      addEdge(params, eds)
    );
  };

  const animateTraversal =
    async (order) => {

      setTraversalOrder([]);

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

        setTraversalOrder(
          (prev) => [
            ...prev,
            nodeId,
          ]
        );

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

        await sleep(700);
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

  const addNode = () => {
    const nextId = String(nodes.length + 1);

    const newNode = {
      id: nextId,

      position: {
        x: 100 + Math.random() * 400,
        y: 100 + Math.random() * 300,
      },

      data: {
        label: nextId,
      },
    };

    setNodes((prev) => [
      ...prev,
      newNode,
    ])
  }

  const addCustomEdge = () => {
    if(nodes.length < 2) {
      return;
    }

    const source = prompt("Source Node Id");
    const target = prompt("Target Node Id");

    if(!source || !target){
      return;
    }

    const newEdge = {
      id: `e${source}-${target}`,
      source,
      target,
    };

    setEdges((prev) => [
      ...prev, newEdge,
    ]);
  }

  const deleteNode = () => {
    const nodeId =
      prompt("Enter Node ID");

    if (!nodeId) {
      return;
    }

    setNodes((prev) =>
      prev.filter(
        (node) =>
          node.id !== nodeId
      )
    );

    setEdges((prev) =>
      prev.filter(
        (edge) =>
          edge.source !== nodeId &&
          edge.target !== nodeId
      )
    );
  };

  const deleteEdge = () => {
    const source =
      prompt("Source ID");

    const target =
      prompt("Target ID");

    setEdges((prev) =>
      prev.filter(
        (edge) =>
          !(
            edge.source === source &&
            edge.target === target
          )
      )
    );
  };

  const saveGraph = () => {
    localStorage.setItem(
      "graphNodes",
      JSON.stringify(nodes)
    );

    localStorage.setItem(
      "graphEdges",
      JSON.stringify(edges)
    );

    alert("Graph Saved");
  };

  const loadGraph = () => {
    const savedNodes =
      localStorage.getItem(
        "graphNodes"
      );

    const savedEdges =
      localStorage.getItem(
        "graphEdges"
      );

    if (
      savedNodes &&
      savedEdges
    ) {
      setNodes(
        JSON.parse(savedNodes)
      );

      setEdges(
        JSON.parse(savedEdges)
      );
    }
  };

  const resetGraph = () => {
    setNodes(initialNodes);
    setEdges(initialEdges);
    setTraversalOrder([]);
  }

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
        addNode={addNode}
        addEdge={addCustomEdge}
        deleteNode={deleteNode}
        deleteEdge={deleteEdge}
        saveGraph={saveGraph}
        loadGraph={loadGraph}
        resetGraph={resetGraph}
      />

      <div  
        style={{
          textAlign: "center",
          marginBottom: "20px",
        }}
      >
        <h3>Traversal Order</h3>
        <p>{traversalOrder.map((node, index) => (
          <span key={index}>
            {node}
            {index !== traversalOrder.length - 1 && (
              <FaArrowRight />
            )}
          </span>
        ))}</p>
      </div>

      <AlgorithmInfo
        title="Graph Traversal"
        description="BFS explores level by level using a queue. DFS explores deeply before backtracking using recursion or a stack."
        timeComplexity="O(V + E)"
        spaceComplexity="O(V)"
      />

      <ReactFlow
        nodes={nodes}
        edges={edges}
        onConnect={onConnect}
        fitView
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
}

export default GraphVisualizer;