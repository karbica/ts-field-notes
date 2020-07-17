/**
 * Finds the max sum for a path in a triangle.
 * @param triangle - A 2D array of numbers in triangle form.
 * @returns The max sum of a path in the triangle.
 */
export default function (triangle: number[][]): number {
    let max = 0;

    function recurse(x: number = 0, y: number = 0, sum: number = 0): void {
        if (y >= triangle.length) {
            max = Math.max(max, sum);
            return;
        }

        const cell = triangle[y][x];
        sum += cell;
        recurse(x, y + 1, sum);
        recurse(x + 1, y + 1, sum);
    }

    recurse();

    return max;
}
