import "./AlgorithmInfo.css"

function AlgorithmInfo({ title, description, timeComplexity, spaceComplexity }) {
    return (
        <div className="algorithm-info">
            <h2>{title}</h2>
            <p>{description}</p>

            <div className="complexity">
                <p>
                    <strong>Time:</strong>{" "}
                    {timeComplexity}
                </p>

                <p>
                    <strong>Space:</strong>{" "}
                    {spaceComplexity}
                </p>
            </div>
        </div>
    );
}

export default AlgorithmInfo