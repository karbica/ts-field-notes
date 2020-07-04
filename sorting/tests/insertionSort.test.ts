import tape from '../../fixture';
import insertionSort from '../insertionSort';

tape('Insertion Sort', (t) => {
    const input = [3, 10, 6, 2, 8, 6, 4, 3, 7, 3, 8, 9];
    const output = insertionSort(input);
    t.same(output, input);
    t.end();
});