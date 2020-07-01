import Queue from './queue';

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
export default class BinaryTree<T> {
    root: Node<T>;

    static from<T>(values: T[]): BinaryTree<T> {
        const [head, ...tail] = values;
        const btree = new BinaryTree<T>(head);
        tail.forEach((value: T) => btree.insert(value));
        return btree;
    }

    constructor(value: T) {
        const root = new Node<T>(value);
        this.root = root;
    }

    insert(value: T): Node<T> {
        const queue = new Queue<Node<T>>();
        queue.enqueue(this.root);
        while (!queue.isEmpty()) {
            const node = queue.dequeue();
            if (node.left) {
                queue.enqueue(node.left);
            } else {
                const left = new Node<T>(value);
                node.left = left;
                return left;
            }
            if (node.right) {
                queue.enqueue(node.right);
            } else {
                const right = new Node<T>(value);
                node.right = right;
                return right;
            }
        }
    }

    inOrder(fn: (node: Node<T>) => void, node: Node<T> = this.root): void {
        if (node !== null) {
            this.inOrder(fn, node.left);
            fn(node);
            this.inOrder(fn, node.right);
        }
    }

    preOrder(fn: (node: Node<T>) => void, node: Node<T> = this.root): void {
        if (node !== null) {
            fn(node);
            this.preOrder(fn, node.left);
            this.preOrder(fn, node.right);
        }
    }

    postOrder(fn: (node: Node<T>) => void, node: Node<T> = this.root): void {
        if (node !== null) {
            this.postOrder(fn, node.left);
            this.postOrder(fn, node.right);
            fn(node);
        }
    }

    get height(): number {
        function _height(node: Node<T>): number {
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
export class Node<T> {
    value: T;
    left: Node<T> | null;
    right: Node<T> | null;

    constructor(value: T) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

    addLeft(value: T) {
        const left = new Node<T>(value);
        this.left = left;
        return left;
    }

    addRight(value: T) {
        const right = new Node<T>(value);
        this.right = right;
        return right;
    }
}
