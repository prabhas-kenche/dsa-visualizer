import {
  useState,
} from "react";

import binarySearch from "../../algorithms/binarySearch";

import BinarySearchArray from "../../components/BinarySearchArray/BinarySearchArray";

function BinarySearch() {
  const generateArray = () => {
    return Array.from(
      { length: 20 },
      (_, index) =>
        (index + 1) * 5
    );
  };

  const [array] = useState(
    generateArray()
  );

  const [target, setTarget] =
    useState("");

  const [low, setLow] =
    useState(null);

  const [high, setHigh] =
    useState(null);

  const [mid, setMid] =
    useState(null);

  const [message, setMessage] =
    useState("");

  const sleep = (ms) =>
    new Promise((resolve) =>
      setTimeout(resolve, ms)
    );

  const startSearch =
    async () => {
      setMessage("");

      const animations =
        binarySearch(
          array,
          Number(target)
        );

      let found = false;

      for (const step of animations) {
        setLow(step.low);

        setHigh(step.high);

        setMid(step.mid);

        await sleep(1000);

        if (step.found) {
          found = true;

          setMessage(
            `Found at index ${step.mid}`
          );

          break;
        }
      }

      if (!found) {
        setMessage(
          "Value not found"
        );
      }
    };

  return (
    <div
      style={{
        textAlign: "center",
      }}
    >
      <h1>
        Binary Search Visualizer
      </h1>

      <input
        type="number"
        placeholder="Enter target"
        value={target}
        onChange={(e) =>
          setTarget(
            e.target.value
          )
        }
      />

      <button
        onClick={startSearch}
      >
        Search
      </button>

      <BinarySearchArray
        array={array}
        low={low}
        high={high}
        mid={mid}
      />

      <h2>{message}</h2>

      <div>
        <p>
          Time Complexity:
          O(log n)
        </p>

        <p>
          Space Complexity:
          O(1)
        </p>
      </div>
    </div>
  );
}

export default BinarySearch;