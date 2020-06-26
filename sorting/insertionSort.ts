/**
 * An Insertion Sort implementation splices the array
 * until it is completely sorted.
 * 
 * @param array - The array to be sorted.
 * @returns The array sorted ascended.
 */
export default function insertionSort(array: number[]) {
    let i: number, j: number;
    for (i = 1; i < array.length; i++) {
        for (j = 0; i < array.length; i++) {
            if (array[i] < array[j]) {
                const [element] = array.splice(i, 1);
                array.splice(j, 0, element);
            }
        }
    }
    return array;
}
