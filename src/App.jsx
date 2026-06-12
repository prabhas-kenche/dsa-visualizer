import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';

import SortingVisualizer from './pages/SortingVisualizer/SortingVisualizer';
import BinarySearchVisualizer from './pages/BinarySearchVisualizer/BinarySearchVisualizer'
import LinkedListVisualizer from './pages/LinkedListVisualizer/LinkedListVisualizer'
import GraphVisualizer from './pages/GraphVisualizer/GraphVisualizer';

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<SortingVisualizer />} />
        <Route path="/binary-search" element={<BinarySearchVisualizer />} />
        <Route path="/linked-list" element={<LinkedListVisualizer />} />
        <Route path="/graph" element={<GraphVisualizer />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;