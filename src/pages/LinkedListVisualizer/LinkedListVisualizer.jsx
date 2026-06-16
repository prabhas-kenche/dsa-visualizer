import { useState } from "react";

import LinkedListView from "../../components/LinkedListView/LinkedListView";
import AlgorithmInfo from "../../components/AlgorithmInfo/AlgorithmInfo";

function LinkedListVisualizer() {
  const [list, setList] =
    useState([10, 20, 30]);

  const [value, setValue] =
    useState("");

  const [
    highlightedIndex,
    setHighlightedIndex,
  ] = useState(null);

  const insertHead = () => {
    if (!value) return;

    setList([
      Number(value),
      ...list,
    ]);

    setValue("");
  };

  const insertTail = () => {
    if (!value) return;

    setList([
      ...list,
      Number(value),
    ]);

    setValue("");
  };

  const deleteNode = () => {
    if (!value) return;

    setList(
      list.filter(
        (item) =>
          item !== Number(value)
      )
    );

    setValue("");
  };

  const searchNode = async () => {
    const target =
      Number(value);

    setHighlightedIndex(null);

    for (
      let i = 0;
      i < list.length;
      i++
    ) {
      setHighlightedIndex(i);

      await new Promise(
        (resolve) =>
          setTimeout(
            resolve,
            500
          )
      );

      if (
        list[i] === target
      ) {
        return;
      }
    }

    setHighlightedIndex(null);
  };

  return (
    <div
      style={{
        textAlign: "center",
      }}
    >
      <h1>
        Linked List Visualizer
      </h1>

      <AlgorithmInfo
        title="Linked List"
        description="A linked list stores elements in nodes connected using pointers."
        timeComplexity="Search: O(n)"
        spaceComplexity="O(n)"
      />

      <input
        type="number"
        value={value}
        placeholder="Enter value"
        onChange={(e) =>
          setValue(
            e.target.value
          )
        }
      />

      <div
        style={{
          marginTop: "20px",
        }}
      >
        <button
          onClick={
            insertHead
          }
        >
          Insert Head
        </button>

        <button
          onClick={
            insertTail
          }
        >
          Insert Tail
        </button>

        <button
          onClick={
            deleteNode
          }
        >
          Delete
        </button>

        <button
          onClick={
            searchNode
          }
        >
          Search
        </button>
      </div>

      <LinkedListView
        list={list}
        highlightedIndex={
          highlightedIndex
        }
      />

      <div
        style={{
          marginTop: "30px",
        }}
      >
        <p>
          Search:
          O(n)
        </p>

        <p>
          Insert Head:
          O(1)
        </p>

        <p>
          Insert Tail:
          O(n)
        </p>

        <p>
          Delete:
          O(n)
        </p>
      </div>
    </div>
  );
}

export default LinkedListVisualizer;