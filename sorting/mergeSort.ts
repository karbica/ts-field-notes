/**
 * A Merge Sort implementation recursively breaks down the array
 * until two elements of the internal arrays can be swapped. It
 * is then rebuilt again into a sorted array. This implementation
 * returns a new array.
 *
 * @param array - The array to be sorted.
 * @returns The array sorted as ascended.
 */
export default function mergeSort(array: number[]) {
    if (array.length < 2) {
        return array;
    }

    const middle = Math.floor(array.length / 2);
    const left = array.slice(0, middle);
    const right = array.slice(middle);

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left: number[], right: number[]) {
    const sorted = [];

    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            sorted.push(left.shift());
        } else {
            sorted.push(right.shift());
        }
    }

    return [...sorted, ...left, ...right];
}
