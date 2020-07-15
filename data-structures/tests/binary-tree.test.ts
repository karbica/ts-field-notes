import tape from '../../fixture';
import BinaryTree from '../binaryTree';
import util from 'util';

tape('Binary Tree Data Structure', (t) => {
    const binaryTree = new BinaryTree(10);
    binaryTree.insert(8);
    binaryTree.insert(13);
    binaryTree.insert(9);
    binaryTree.insert(12);
    binaryTree.insert(15);
    binaryTree.insert(5);
    binaryTree.insert(7);
    binaryTree.insert(6);
    function inorder(node, arr) {
        if (node !== null) {
            arr.push(node.value);
            inorder(node.left, arr);
            inorder(node.right, arr);
            return arr;
        }
    }
    console.log(inorder(binaryTree.root, []))
    // console.log(BinaryTree.from([3,2,5,1,32,4]));
    // console.log(util.inspect(BinaryTree.from([3,3,3,2,5,1,32,4]), false, null, true));
    t.end();
    // const inOrderTraversal = [];
    // const preOrderTraversal = [];
    // const postOrderTraversal = [];
    // const btree = BinaryTree.from<string>([
    //     'a',
    //     'b',
    //     'c',
    //     'd',
    //     'e',
    //     'f',
    //     'g',
    //     'h',
    //     'i',
    // ]);
    // t.equal(btree.root.value, 'a', 'should correctly store root value');
    // t.equal(
    //     btree.root.left.value,
    //     'b',
    //     'should correctly refer to root left value'
    // );
    // t.equal(
    //     btree.root.right.value,
    //     'c',
    //     'should correctly refer to root right value'
    // );
    // btree.inOrder((node) => inOrderTraversal.push(node.value));
    // t.same(
    //     inOrderTraversal,
    //     ['h', 'd', 'i', 'b', 'e', 'a', 'f', 'c', 'g'],
    //     'should correctly traverse in-order'
    // );
    // btree.preOrder((node) => preOrderTraversal.push(node.value));
    // t.same(
    //     preOrderTraversal,
    //     ['a', 'b', 'd', 'h', 'i', 'e', 'c', 'f', 'g'],
    //     'should correctly traverse pre-order'
    // );
    // btree.postOrder((node) => postOrderTraversal.push(node.value));
    // t.same(
    //     postOrderTraversal,
    //     ['h', 'i', 'd', 'e', 'b', 'f', 'g', 'c', 'a'],
    //     'should correctly traverse post-order'
    // );
    // t.equal(btree.height, 4, 'should have correct height');
    // t.end();
});
