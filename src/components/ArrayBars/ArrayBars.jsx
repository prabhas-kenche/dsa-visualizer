import './ArrayBars.css'

function ArrayBars({ array, comparing, sorted }) {
    return (
        <div className="array-container">
            {array.map((value, index) => {
                let className = "array-bar";

                if(sorted.includes(index)) {
                    className += " sorted";
                } else if (comparing.includes(index)) {
                    className += " comparing";
                }

                return (
                    <div 
                        key={index}
                        className={className}
                        style={{
                            height: `${value}px`,
                        }}
                    ></div>
                );
            })}
        </div>
    );
}

export default ArrayBars