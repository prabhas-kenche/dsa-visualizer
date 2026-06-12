const selectionSort = (array) => {
    const animations = [];
    const arr = [...array];

    for(let i = 0; i < arr.length - 1; i++){
        let min_index = i;

        for(let j = i + 1; j < arr.length; j++){
            animations.push({
                type: "compare",
                indices: [min_index, j],
            });

            if(arr[j] < arr[min_index]){
                min_index = j;
            }
        }

        if(min_index !== i){
            animations.push({
                type: "swap",
                indices: [i, min_index],
            });

            [arr[i], arr[min_index]] = [arr[min_index], arr[i]];
        }

        animations.push({
            type: "sorted",
            index: i,
        });
    }

    animations.push({
        type: "sorted",
        index: arr.length - 1,
    });

    return animations;
}

export default selectionSort;