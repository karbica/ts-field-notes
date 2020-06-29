/**
 * A Tree data structure allows data to be stored in hierarchical
 * form. A tree is made of parents and children. Any parent can
 * have any amount of children. And a child can become a parent by
 * pointing to any amount children. A tree is required to have a
 * single node for instantiation.
 *
 * @param item - The root value required to instantiate the tree.
 * @returns An instance of a tree.
 */
export default class Tree<T> {
    readonly root: Node<T>;

    constructor(item: T) {
        const node = new Node<T>(item);
        this.root = node;
    }

    traverse(fn: (node: Node<T>) => void): void {
        function walk(node: Node<T>): void {
            fn(node);
            if (node.hasChildren()) {
                node.children.forEach((child: Node<T>) => {
                    walk(child);
                });
            }
        }
        walk(this.root);
    }
}

/**
 * A Node is the atomic unit of a tree. It can be a parent if
 * it has at least one child. It can also be a parent if it descends
 * from a parent.
 *
 * @param item - The value to be stored in the node.
 * @returns An instance of a node.
 */
export class Node<T> {
    readonly value: T;
    readonly children: Node<T>[];

    constructor(value: T) {
        this.value = value;
        this.children = [];
    }

    addChild(item: T): Node<T> {
        const node = new Node<T>(item);
        this.children.push(node);
        return node;
    }

    hasChildren(): boolean {
        return this.children.length !== 0;
    }
}
