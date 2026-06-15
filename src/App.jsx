import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from "react";

import Navbar from './components/Navbar/Navbar';
import ThemeToggle from './components-2/ThemeToggle/ThemeToggle';

import SortingVisualizer from './pages/SortingVisualizer/SortingVisualizer';
import LinkedListVisualizer from './pages/LinkedListVisualizer/LinkedListVisualizer'
import GraphVisualizer from './pages/GraphVisualizer/GraphVisualizer';
import BinarySearch from './pages/BinarySearch/BinarySearch';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <BrowserRouter>
      <Navbar />

      <div style={{
        textAlign: "center",
        marginTop: "20px",
      }}
      >
        <ThemeToggle
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />
      </div>

      <Routes>
        <Route path="/" element={<SortingVisualizer />} />
        <Route path="/binary-search" element={<BinarySearch />} />
        <Route path="/linked-list" element={<LinkedListVisualizer />} />
        <Route path="/graph" element={<GraphVisualizer />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;