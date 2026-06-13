const mergeSort = (array) => {
    const animations = [];
    const arr = [...array];

    mergeSortHelper(
        arr, 0, arr.length - 1, animations
    );

    for(let i = 0; i < arr.length; i++){
        animations.push({
            type: "sorted",
            index: i,
        });
    }
    return animations;
};

function mergeSortHelper(arr, left, right, animations){
    if(left >= right) return;

    const mid = Math.floor((left + right) / 2);

    mergeSortHelper(arr, left, mid, animations);
    mergeSortHelper(arr, mid + 1, right, animations);
    merge(arr, left, mid, right, animations);
}

function merge(arr, left, mid, right, animations){
    const temp = [];

    let i = left;
    let j = mid + 1;

    while(i <= mid & j <= right){
        animations.push({
            type: "compare",
            indices: [i, j],
        });

        if(arr[i] <= arr[j]){
            temp.push(arr[i]);
            i++;
        } else {
            temp.push(arr[j]);
            j++;
        }
    }

    while(i <= mid){
        temp.push(arr[i]);
        i++;
    }

    while(j <= right){
        temp.push(arr[j]);
        j++;
    }

    for(let k = 0; k < temp.length; k++){
        arr[left + k] = temp[k];

        animations.push({
            type: "overwrite",
            index: left + k,
            value: temp[k],
        });
    }
}

export default mergeSort;