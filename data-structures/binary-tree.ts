import Queue from './queue';

export default class BinaryTree {
    root: Node;

    /**
     * A Binary Tree data structure stores data in a hierarchical form.
     * Each node has a left and right pointer to another node. A tree
     * must start with a root node. This implementation does not balance
     * itself and it does not have a compare function. This binary tree
     * implementation simply connects Nodes to left and right pointers.
     * @class
     * @param value - The value to instantiate the root.
     */
    constructor(value: number) {
        this.root = new Node(value);
    }

    /**
     * Return an instance of a binary tree with the provided array.
     * This builds the tree from a level order traversal.
     * @param values - An array of numbers to initialize with.
     * @returns An instance of a binary tree.
     */
    static from(values: number[]): BinaryTree {
        const binaryTree = new BinaryTree(values.shift());
        const queue = new Queue<Node>();
        queue.enqueue(binaryTree.root);

        while (values.length) {
            const node = queue.dequeue();
            if (!node) continue;
            // TODO Figure out a way to do this without modifying
            // the source array, by copy or using a counter.
            const left = values.shift();
            const right = values.shift();
            if (left) node.left = new Node(left);
            if (right) node.right = new Node(right);
            queue.enqueue(node.left);
            queue.enqueue(node.right);
        }

        return binaryTree;
    }

    /**
     * Adds a value into the binary tree at level order.
     * @param value - The value to insert into the binary tree.
     */
    insert(value: number): void {
        const queue = new Queue<Node>();
        queue.enqueue(this.root);
        while (!queue.isEmpty()) {
            const node = queue.dequeue();
            if (node.left) {
                queue.enqueue(node.left);
            } else {
                node.left = new Node(value);
                return;
            }
            if (node.right) {
                queue.enqueue(node.right);
            } else {
                node.right = new Node(value);
                return;
            }
        }
    }

    /**
     * Traverse the tree inorder while invoking a callback.
     * An inorder traversal is defined as (L Root R).
     * @param fn - The callback to invoke on every node.
     * @param node - The starting node for traversal.
     */
    inOrder(fn: (node: Node) => void, node: Node = this.root): void {
        if (node !== null) {
            this.inOrder(fn, node.left);
            fn(node);
            this.inOrder(fn, node.right);
        }
    }

    /**
     * Traverse the tree preorder while invoking a callback.
     * A preorder traversal is defined as (Root L R).
     * @param fn - The callback to invoke on every node.
     * @param node - The starting node for traversal.
     */
    preOrder(fn: (node: Node) => void, node: Node = this.root): void {
        if (node !== null) {
            fn(node);
            this.preOrder(fn, node.left);
            this.preOrder(fn, node.right);
        }
    }

    /**
     * Traverse the tree postorder while invoking a callback.
     * A postorder traversal is defined as (L R Root).
     * @param fn - The callback to invoke on every node.
     * @param node - The starting node for traversal.
     */
    postOrder(fn: (node: Node) => void, node: Node = this.root): void {
        if (node !== null) {
            this.postOrder(fn, node.left);
            this.postOrder(fn, node.right);
            fn(node);
        }
    }

    /**
     * Calculates the height of the tree.
     * @returns A number indicating the height of the tree.
     */
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

export class Node {
    value: number;
    left: Node | null;
    right: Node | null;

    /**
     * A node is an atomic unit of a Binary Tree. It contains pointers
     * to a left and right node along with a value.
     * @param value - The value to store within the Node.
     */
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
