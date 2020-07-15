import Queue from './queue';

const FROM_LEVELORDER = 'FROM_LEVEL_ORDER';
const FROM_INORDER_POSTORDER = 'FROM_INORDER_POSTORDER';

// This level order traversal supports null values in missing places.
// const levelorder = (root) => {
//     let nc = 0;
//     const arr = [];
//     const queue = [root];
    
//     while (queue.length !== nc) {
//         const node = queue.shift();
//         if (!node) {
//             arr.push(null);
//             queue.push(null);
//             queue.push(null);
//             nc++;
//         } else {
//             arr.push(node.val);
//             queue.push(node.left);
//             queue.push(node.right);
//             if (!node.left) nc++;
//             if (!node.right) nc++;
//         }
//     }
    
//     return arr;
// };

// var buildTree = function(inorder, postorder) {    
//     const map = {};
//     for (let i=0;i<inorder.length;i++) map[inorder[i]] = i; 
    
//     let recurse = function(start, end) {
//         if (start > end) return null;
//         const val = postorder.pop();
//         const root = new Node(val);
//         root.right = recurse(map[val] + 1, end);
//         root.left = recurse(start, map[val] - 1);
//         return root;
//     }
    
//     return recurse(0, inorder.length - 1);  
//     };

/**
 * A Binary Tree data structure stores data in a hierarchical form.
 * Each node has a left and right pointer to another node. A tree
 * must start with a root node. This implementation does not balance
 * itself and it does not have a compare function. This binary tree
 * implementation simply connects Nodes to left and right pointers.
 *
 * @param node - The root node to instantiate the Binary Tree.
 * @returns An instance of a Binary Tree.
 */
export default class BinaryTree {
    root: Node;

    // static FROM_LEVEL_ORDER<T>(values: T[], accessor: (value: T) => number = (v) => v): BinaryTree<T> {
    //     const [head, ...tail] = values;
    //     const btree = new BinaryTree<T>(head);
    //     tail.forEach((value: T) => btree.insert(value));
    //     return btree;
    // }

    // static FROM_INORDER_POSTORDER<T>(inorder: T[], postorder: T[], accesssor: (value: T) => number): BinaryTree<T> {

    // }

    // static fromInPost(inorder: number[], postorder: number[]): BinaryTree<T> {
    //     const n = inorder.length;
    //     if (!n) {
    //         return null;
    //     }
    //     let i = n - 1;
    //     const from = function(stop?: number): Node<T> | null {
    //         if (inorder[i] !== stop) {
    //             const root = new Node<number>(postorder.pop());
    //             root.right = from(root.value);
    //             i--;
    //             root.left = from(stop);
    //         }
    //         return null;
    //     }
    //     return from();
    // }

    constructor(value: number) {
        const root = new Node(value);
        this.root = root;
    }

    static from(values: number[]): BinaryTree {
        values.sort((a, b) => a - b);

        function _from(left: number, right: number): Node {
            if (left > right) return null;
            const mid = Math.floor(left + (right - left) / 2);
            const node = new Node(values[mid]);
            node.left = _from(left, mid - 1);
            node.right = _from(mid + 1, right);
            return node;
        }

        const root = _from(0, values.length - 1);
        const binaryTree = new BinaryTree(root.value);
        binaryTree.root = root;
        return binaryTree;
    }

    insert(value: number): void {
        function _insert(node: Node): Node {
            if (node === null) {
                node = new Node(value);
            } else {
                if (value < node.value) {
                    node.left = _insert(node.left);
                } else {
                    node.right = _insert(node.right);
                }
            }
            return node;
            // if (node.value > value) {
            //     if (node.left) {
            //         _insert(node.left)
            //     } else {
            //         node.addLeft(value);
            //     }
            // }

            // if (node.value < value) {
            //     if (node.right) {
            //         _insert(node.right)
            //     } else {
            //         node.addRight(value);
            //     }
            // }
        }

        _insert(this.root);
    }

    // insert_OBSOLETE(key:number, value: T): Node<T> {
    //     const queue = new Queue<Node<T>>();
    //     queue.enqueue(this.root);
    //     while (!queue.isEmpty()) {
    //         const node = queue.dequeue();
    //         if (node.left) {
    //             queue.enqueue(node.left);
    //         } else {
    //             const left = new Node<T>(key, value);
    //             node.left = left;
    //             return left;
    //         }
    //         if (node.right) {
    //             queue.enqueue(node.right);
    //         } else {
    //             const right = new Node<T>(key, value);
    //             node.right = right;
    //             return right;
    //         }
    //     }
    // }

    inOrder(fn: (node: Node) => void, node: Node = this.root): void {
        if (node !== null) {
            this.inOrder(fn, node.left);
            fn(node);
            this.inOrder(fn, node.right);
        }
    }

    preOrder(fn: (node: Node) => void, node: Node = this.root): void {
        if (node !== null) {
            fn(node);
            this.preOrder(fn, node.left);
            this.preOrder(fn, node.right);
        }
    }

    postOrder(fn: (node: Node) => void, node: Node = this.root): void {
        if (node !== null) {
            this.postOrder(fn, node.left);
            this.postOrder(fn, node.right);
            fn(node);
        }
    }

    get height(): number {
        function _height(node: Node): number {
            if (node === null) {
                return 0;
            } else {
                const left = _height(node.left);
                const right = _height(node.right);

                if (left > right) {
                    return left + 1;
                } else {
                    return right + 1;
                }
            }
        }

        return _height(this.root);
    }
}

/**
 * A node is an atomic unit of a Binary Tree. It contains pointers
 * to a left and right node along with a value.
 *
 * @param value - The value to store within the Node.
 * @returns An instance of a Node.
 */
export class Node {
    value: number;
    left: Node | null;
    right: Node | null;

    constructor(value: number) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

    addLeft(value: number) {
        const left = new Node(value);
        this.left = left;
        return left;
    }

    addRight(value: number) {
        const right = new Node(value);
        this.right = right;
        return right;
    }
}
