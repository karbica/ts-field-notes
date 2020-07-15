/**
 * Returns wether or not the starting index can jump to an element
 * containing the value `0`. Jumps can only be made to `i + arr[i]`
 * or `i - arr[i]`.
 * @param arr - The array containing jump values.
 * @param start - The starting index to calculate jumps.
 */
export default function (arr: number[], start: number): boolean {
    const seen = new Set();
    const queue = [start];

    while (queue.length) {
        const index = queue.shift();
        const value = arr[index];
        if (value === 0) return true;
        const left = index - value;
        const right = index + value;
        const leftOverflow = left < 0;
        const rightOverflow = right > arr.length - 1;
        const leftSeen = seen.has(left);
        const rightSeen = seen.has(right);
        if (!leftOverflow && !leftSeen) queue.push(left);
        if (!rightOverflow && !rightSeen) queue.push(right);
        seen.add(index);
    }

    return false;
}
