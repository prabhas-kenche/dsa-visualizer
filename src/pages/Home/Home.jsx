import FeatureCard from "../../components/FeatureCard/FeatureCard";

import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="hero">
        <h1>DSA Visualizer</h1>
        <p>Learn Data Structures and Algorithms through interactive visualizations.</p>
      </div>

      <div className="cards-grid">
        <FeatureCard
          title="Sorting"
          description="Visualize Bubble, Selection, Insertion, Merge and Quick Sort."
          path="/sorting"
        />

        <FeatureCard
          title="Binary Search"
          description="Understand how binary search reduces the search space."
          path="/binary-search"
        />

        <FeatureCard
          title="Linked List"
          description="Insert, delete and search nodes visually."
          path="/linked-list"
        />

        <FeatureCard
          title="Graph"
          description="Explore BFS and DFS graph traversals."
          path="/graph"
        />
      </div>
    </div>
  );
}

export default Home;