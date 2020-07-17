import tape from '../../fixture';
import fn from '../max-triangle-sum';

tape('Max Triangle Sum', (t) => {
    let triangle = [[5], [2, 1], [4, 8, 3]];
    t.equal(fn(triangle), 15);
    triangle = [...Array(10).keys()].map((v, i) => [...Array(i + 1).keys()]);
    t.equal(fn(triangle), 45);
    t.equal(fn([[0]]), 0);
    t.end();
});
