import { useState } from "react";

import Controls from "../../components/Controls/Controls";
import ArrayBars from "../../components/ArrayBars/ArrayBars";

import bubbleSort from "../../algorithms/bubblesort";
import selectionSort from "../../algorithms/selectionsort";
import insertionSort from "../../algorithms/insertionSort";
import mergeSort from "../../algorithms/mergeSort";
import quickSort from "../../algorithms/quickSort";
import ComplexityPanel from "../../components/ComplexityPanel/ComplexityPanel";
import StatsPanel from "../../components/StatsPanel/StatsPanel";
import AlgorithmInfo from "../../components/AlgorithmInfo/AlgorithmInfo";

function SortingVisualizer() {
  const createRandomArray = (size) => {
    return Array.from(
      { length: size },
      () => Math.floor(Math.random() * 300) + 20
    );
  };

  const [arraySize, setArraySize] = useState(20);
  const [array, setArray] = useState(createRandomArray(20));
  const [speed, setSpeed] =useState(100);
  const [algorithm, setAlgorithm] = useState("bubble");
  const [isSorting, setIsSorting] = useState(false);
  const [comparing, setComparing] = useState([]);
  const [sorted, setSorted] = useState([]);
  const [comparisions, setComparisions] = useState(0);
  const [swaps, setSwaps] = useState(0);
  const [completed, setCompleted] = useState(false);

  const generateArray = () => {
    setArray(createRandomArray(arraySize));
    setComparing([]);
    setSorted([]);

    setCompleted(false);
  };

  const handleArraySizeChange = (size) => {
    setArraySize(size);

    setArray(createRandomArray(size));

    setComparing([]);
    setSorted([]);
  };

  const sleep = (ms) =>
    new Promise((resolve) =>
      setTimeout(resolve, ms)
    );

  const runAnimations = async (
    animations
  ) => {
    const currentArray = [...array];

    for (const step of animations) {
      if (step.type === "compare") {
        setComparisions(
          (prev) => prev + 1
        );

        setComparing(step.indices);

        await sleep(speed);
      }

      else if (step.type === "swap") {

        setSwaps(
          (prev) => prev + 1
        );
        const [i, j] = step.indices;

        [currentArray[i], currentArray[j]] = [
          currentArray[j],
          currentArray[i],
        ];

        setArray([...currentArray]);

        await sleep(speed);
      }

      else if(step.type === "overwrite") {
        currentArray[step.index] = step.value;
        setArray([...currentArray]);

        await sleep(speed);
      }

      else if (step.type === "sorted") {
        setSorted((prev) => [
          ...prev,
          step.index,
        ]);

        await sleep(speed);
      }
    }

    setComparing([]);
  };

  const startSorting = async () => {
    setIsSorting(true);
    setCompleted(false);
    setComparisions(0);
    setSwaps(0);

    let animations = [];

    if (algorithm === "bubble") {
      animations = bubbleSort(array);
    }

    if (algorithm === "selection") {
      animations = selectionSort(array);
    }

    if(algorithm === "insertion"){
      animations = insertionSort(array);
    }

    if(algorithm === "merge"){
      animations = mergeSort(array);
    }

    if(algorithm === "quick"){
      animations = quickSort(array);
    }

    await runAnimations(animations);

    setIsSorting(false);
    setCompleted(true);
  };

  return (
    <>
      <AlgorithmInfo
        title="Sorting Algorithms"
        description="Sorting rearranges elements into ascending or descending order."
        timeComplexity="Depends on Algorithm"
        spaceComplexity="Depends on Algorithm"
      />

      <Controls
        generateArray={generateArray}
        startSorting={startSorting}
        arraySize={arraySize}
        setArraySize={handleArraySizeChange}
        speed={speed}
        setSpeed={setSpeed}
        algorithm={algorithm}
        setAlgorithm={setAlgorithm}
        isSorting={isSorting}
      />

      <ComplexityPanel algorithm={algorithm} />

      <StatsPanel 
        comparisions={comparisions}
        swaps={swaps}
        isSorting={isSorting}
        completed={completed}
      />

      <ArrayBars
        array={array}
        comparing={comparing}
        sorted={sorted}
      />
    </>
  );
}

export default SortingVisualizer;