import tape from '../../fixture';
import BinaryTree from '../../data-structures/binary-tree';
import fn from '../even-grandparent-sum';

tape('Even Grandparent Sum', (t) => {
    let tree = BinaryTree.from([
        6,
        7,
        8,
        2,
        7,
        1,
        3,
        9,
        null,
        1,
        4,
        null,
        null,
        null,
        5,
    ]);
    t.equal(fn(tree.root), 18);
    tree = BinaryTree.from([1]);
    t.equal(fn(tree.root), 0);
    tree = BinaryTree.from([2, 1, 2, 3, 4]);
    t.equal(fn(tree.root), 7);
    t.end();
});
