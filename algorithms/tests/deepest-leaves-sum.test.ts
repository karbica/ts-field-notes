import tape from '../../fixture';
import BinaryTree from '../../data-structures/binary-tree';
import fn from '../deepest-leaves-sum';

tape('Deepest Leaves Sum', (t) => {
    let tree = BinaryTree.from([1,2,3,4,5,null,6,7,null,null,null,null,8]);
    t.equal(fn(tree.root), 15);
    tree = BinaryTree.from([1]);
    t.equal(fn(tree.root), 1);
    tree = BinaryTree.from([1,2,3,4,5,6]);
    t.equal(fn(tree.root), 15);
    t.end();
});
