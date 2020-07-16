import sinon from 'sinon';
import tape from '../../fixture';
import BinaryTree from '../binary-tree';

tape('Binary Tree Data Structure', (t) => {
    const spy = sinon.spy();
    const arr = [...Array(10).keys()].map((v, i) => i);
    let tree: BinaryTree;
    t.doesNotThrow(
        () => (tree = BinaryTree.from(arr)),
        'initializes a tree from array'
    );
    t.equal(tree.height, 4, 'has the correct height');
    t.equal(tree.root.value, 0, 'has the correct root value');
    tree.inOrder(spy);
    t.equal(
        spy.callCount,
        10,
        'calls the spy the correct amount of times, inorder'
    );
    spy.resetHistory();
    tree.preOrder(spy);
    t.equal(
        spy.callCount,
        10,
        'calls the spy the correct amount of times, preorder'
    );
    spy.resetHistory();
    tree.postOrder(spy);
    t.equal(
        spy.callCount,
        10,
        'calls the spy the correct amount of times, postorder'
    );
    spy.resetHistory();
    t.doesNotThrow(() => tree.insert(10), 'inserts a value');
    t.end();
});
