import tape from "tape";
import BinaryTree from "../binaryTree";

tape("Binary Tree Data Structure", (t) => {
    const inOrderTraversal = [];
    const preOrderTraversal = [];
    const postOrderTraversal = [];
    const btree = BinaryTree.from<string>([
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
    ]);
    t.equal(btree.root.value, "a", "should correctly store root value");
    t.equal(
        btree.root.left.value,
        "b",
        "should correctly refer to root left value"
    );
    t.equal(
        btree.root.right.value,
        "c",
        "should correctly refer to root right value"
    );
    btree.inOrder((node) => inOrderTraversal.push(node.value));
    t.same(
        inOrderTraversal,
        ["h", "d", "i", "b", "e", "a", "f", "c", "g"],
        "should correctly traverse in-order"
    );
    btree.preOrder((node) => preOrderTraversal.push(node.value));
    t.same(
        preOrderTraversal,
        ["a", "b", "d", "h", "i", "e", "c", "f", "g"],
        "should correctly traverse pre-order"
    );
    btree.postOrder((node) => postOrderTraversal.push(node.value));
    t.same(
        postOrderTraversal,
        ["h", "i", "d", "e", "b", "f", "g", "c", "a"],
        "should correctly traverse post-order"
    );
    t.end();
});
