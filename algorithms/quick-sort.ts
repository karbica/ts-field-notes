/**
 * A Quick Sort implementation that recursively splits an array
 * using a pivot to sort the elements. This implementation returns
 * a new array.
 * 
 * @param array - The array to be sorted.
 * @return The array sorted as ascended.
 */
export default function quickSort(array: number[]): number[] {
    if (array.length < 2) {
        return array;
    }

    const pivotIndex = array.length - 1;
    const pivot = array[pivotIndex];
    const left = [];
    const right = [];

    for (let i = 0; i < pivotIndex; i++) {
        const element = array[i];
        element < pivot ? left.push(element) : right.push(element);
    }

    return [...quickSort(left), pivot, ...quickSort(right)]
}
