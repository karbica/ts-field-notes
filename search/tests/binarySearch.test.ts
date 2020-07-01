import tape from '../../fixture';
import binarySearch from '../binarySearch';

tape('Binary Search', (t) => {
    const arr = [...Array(100).keys()];
    t.equal(binarySearch(arr, 42), 42, 'should return correct value');
    t.equal(binarySearch(arr, 101), -1, 'should return `-1` if target not found');
    t.end();
});
