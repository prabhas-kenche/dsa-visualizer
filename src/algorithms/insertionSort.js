const insertionSort = (array) => {
    const animations = [];
    const arr = [...array];

    for(let i = 1; i < arr.length; i++){
        let j = i;

        while(j > 0 && arr[j] < arr[j - 1]){
            animations.push({
                type: "compare",
                indices: [j, j - 1],
            });

            animations.push({
                type: "swap",
                indices: [j, j - 1],
            });

            [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
            j--;
        }
        animations.push({
            type: "sorted",
            index: i,
        });
    }
    return animations;
}

export default insertionSort;