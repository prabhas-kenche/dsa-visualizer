import { Link } from "react-router-dom"

import "./FeatureCard.css"

function FeatureCard({ title, description, path }) {
    return (
        <Link
            to={path}
            className="feature-card"
        >
            <h2>{title}</h2>
            <p>{description}</p>
        </Link>
    );
}

export default FeatureCard;