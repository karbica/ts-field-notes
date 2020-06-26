import * as test from "tape";
import quickSort from "../quickSort";

test("Quick Sort", (t) => {
    const input = [3, 10, 6, 2, 8, 6, 4, 3, 7, 3, 8, 9];
    const output = quickSort(input);
    t.same(output, input.sort((a: number, b: number) => a - b));
    t.end();
});
