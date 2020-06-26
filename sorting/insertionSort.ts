/**
 * An Insertion Sort implementation splices the array within a nested loop
 * until it is completely sorted. This sorts the array in place.
 *
 * @param array - The array to be sorted.
 * @returns The array sorted as ascended.
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
