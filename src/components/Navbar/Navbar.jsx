import { Link } from "react-router-dom"
import "./Navbar.css";

function Navbar() {
    return (
        <nav className="navbar">
            <h2>DSA Visualizer</h2>
            
            <div className="nav-links">
                <Link to="/">Sorting</Link>
                <Link to="/binary-search">Binary search</Link>
                <Link to="/linked-list">Linked List</Link>
                <Link to="/graph">Graph</Link>
            </div>
        </nav>
    )
}

export default Navbar;