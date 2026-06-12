import { Link } from "react-router-dom"

function Navbar() {
    return (
        <nav>
            <Link to="/">Sorting</Link>
            <Link to="/binary-search">Binary search</Link>
            <Link to="/linked-list">Linked List</Link>
            <Link to="/graph">Graph</Link>
        </nav>
    )
}

export default Navbar;