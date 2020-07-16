import tape from '../../fixture';
import BinaryTree from '../../data-structures/binary-tree';
import fn  from '../balance-binary-tree';

tape('Balance Binary Tree', (t) => {
    const arr = [1, 5, 3, 6, 2, 8, 7, 9];
    const tree = BinaryTree.from(arr);
    // TODO Figure out how to test the balance.
    t.doesNotThrow(() => fn(tree.root), 'balances a binary tree without error');
    t.end();
});

