export const initialNodes = [
  {
    id: "1",
    position: { x: 100, y: 100 },
    data: { label: "A" },
  },

  {
    id: "2",
    position: { x: 300, y: 100 },
    data: { label: "B" },
  },

  {
    id: "3",
    position: { x: 100, y: 250 },
    data: { label: "C" },
  },

  {
    id: "4",
    position: { x: 300, y: 250 },
    data: { label: "D" },
  },
];

export const initialEdges = [
  {
    id: "e1-2",
    source: "1",
    target: "2",
  },

  {
    id: "e1-3",
    source: "1",
    target: "3",
  },

  {
    id: "e2-4",
    source: "2",
    target: "4",
  },

  {
    id: "e3-4",
    source: "3",
    target: "4",
  },
];