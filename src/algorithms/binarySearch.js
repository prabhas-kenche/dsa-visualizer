const binarySearch = (array, target) => {
    const animations = [];

    let low = 0;
    let high = array.length - 1;

    while(low <= high){
        const mid = Math.floor((low + high) / 2);

        animations.push({
            low,
            high,
            mid,
            found:
                array[mid] === target,
        });

        if(array[mid] === target) {
            return animations;
        }

        if(array[mid] < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    return animations;
}

export default binarySearch;