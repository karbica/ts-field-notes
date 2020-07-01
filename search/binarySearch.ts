/**
 * Searches a given array for a given element. 
 * @param arr - The array to be searched.
 * @param target - The element to search for.
 */
export default function binarySearch(arr: number[], target: number): number {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
        let middle = Math.floor((low + high) / 2);

        if (target === arr[middle]) {
            return arr[middle];
        }

        if (target > arr[middle]) {
            low = middle + 1;
        }

        if (target < arr[middle]) {
            high = middle - 1;
        }
    }

    return -1;
}
