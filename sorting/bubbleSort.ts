/**
 * A Bubble Sort implementation swaps elements until there are
 * no more swaps needed, resulting in a sorted array.
 * 
 * @param - The array to be sorted.
 * @returns The array sorted ascended.
 */
export default function bubbleSort(array: number[]) {
    let swapped = false;
    do {
        swapped = false;
        array.forEach((element: number, index: number) => {
            if (element > array[index + 1]) {
                const temp = element;
                array[index] = array[index + 1];
                array[index + 1] = temp;
                swapped = true;
            }
        });
    } while (swapped);
    return array;
}
