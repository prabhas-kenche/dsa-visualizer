import "./BinarySearchArray.css";

function BinarySearchArray({
  array,
  low,
  high,
  mid,
}) {
  return (
    <div className="binary-array">
      {array.map((value, index) => {
        let className = "binary-box";

        if (index === low) {
          className += " low";
        }

        if (index === high) {
          className += " high";
        }

        if (index === mid) {
          className += " mid";
        }

        return (
          <div
            key={index}
            className={className}
          >
            {value}
          </div>
        );
      })}
    </div>
  );
}

export default BinarySearchArray;