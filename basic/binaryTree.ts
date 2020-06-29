/**
 * A Binary Tree data structure stores data in a hierarchical form.
 * Each node has a left and right pointer to another node. A tree
 * must start with a root node.
 * 
 * @param node - The root node to instantiate the Binary Tree.
 * @returns An instance of a Binary Tree.
 */
export default class Tree<T> {
    root: Node<T>;

    constructor(value: T) {
        const root = new Node<T>(value);
        this.root = root;
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
}

 /**
  * A node is an atomic unit of a Binary Tree. It contains pointers
  * to a left and right node along with a value.
  * 
  * @param value - The value to store within the Node.
  * @returns An instance of a Node.
  */
 export class Node<T> {
     value: T
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
