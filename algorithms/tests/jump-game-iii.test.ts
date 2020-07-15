import tape from '../../fixture';
import fn from '../jump-game-iii';

tape('Jump Game III', (t) => {
    t.true(fn([4, 2, 3, 0, 3, 1, 2], 5));
    t.true(fn([4, 2, 3, 0, 3, 1, 2], 0));
    t.false(fn([3, 0, 2, 1, 2], 0));
    t.false(fn([1, 1, 1, 1, 1], 1));
    t.true(fn([0], 0));
    t.end();
});
