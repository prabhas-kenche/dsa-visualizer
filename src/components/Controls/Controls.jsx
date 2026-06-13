import "./Controls.css";

function Controls({
    generateArray,
    arraySize,
    setArraySize,
    startSorting,
    speed,
    setSpeed,
    algorithm,
    setAlgorithm,
    isSorting,
}) {
    return (
    <div className="controls">
        <button
            onClick={generateArray}
            disabled={isSorting}
        >Generate Array</button>

        <button
            onClick={startSorting}
            disabled={isSorting}
        >Start Sorting</button>

        <select
            value={algorithm}
            onChange={(e) =>
                setAlgorithm(e.target.value)
            }
            disabled={isSorting}
        >
            <option value="bubbled">Bubble Sort</option>
            <option value="selection">Selection Sort</option>
            <option value="insertion">Insertion Sort</option>
            <option value="merge">Merge Sort</option>
            <option value="quick">Quick Sort</option>
        </select>

        <div>
            <label>Size: {arraySize}</label>
            <input 
                type="range"
                min="5"
                max="50"
                value={arraySize}
                onChange={(e) =>
                    setArraySize(Number(e.target.value))
                }
                disabled={isSorting}
            />
        </div>

        <div>
            <lebel>Speed: {speed}ms</lebel>

            <input
                type="range"
                min="10"
                max="500"
                step="10"
                value={speed}
                onChange={(e) =>
                    setSpeed(Number(e.target.value))
                }
                disabled={isSorting}
            />
        </div>
    </div>
    )
}

export default Controls;