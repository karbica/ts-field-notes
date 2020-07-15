export default class DoublyLinkedList<T> {
    head: Node<T>;
    tail: Node<T>;
    length: number;

    /**
     * Returns a new instance of a double linked list with values.
     * @param values - An array of values to initialize the list.
     */
    static from<T>(values: T[]): DoublyLinkedList<T> {
        const l = new DoublyLinkedList<T>();

        for (const value of values) {
            l.push(value);
        }

        return l;
    }

    /**
     * A doubly linked list contains a lost of nodes in which
     * each node points to the next node and the previous node in
     * the list.
     * @class
     */
    constructor() {
        this.head = this.tail;
        this.tail = this.head;
        this.length = 0;
    }

    /**
     * Adds a value to the end of the list, then returns the new
     * length of the list.
     * @param value - The values to append to the list.
     * @returns The new length of the list.
     */
    push(value: T): number {
        const node = new Node<T>(value);

        if (!this.length) {
            this.head = node;
            this.tail = node;
            this.length++;

            return this.length;
        }

        const prev = this.tail;
        prev.next = node;
        node.prev = prev;
        this.tail = node;
        this.length++;

        return this.length;
    }

    /**
     * Removes the last value from the list and returns that value.
     * @returns The last value that was stored in the list.
     */
    pop(): T {
        if (!this.length) return;

        const node = this.tail;
        const prev = this.tail.prev;
        node.prev = null;
        node.next = null;
        this.tail = prev;
        this.tail.next = null;
        this.length--;

        return node.value;
    }

    /**
     * Removes the first value from the list and returns that value.
     * @returns The first value that was store in the list.
     */
    shift(): T {
        if (!this.length) return;

        const node = this.head;
        const next = this.head.next;
        node.next = null;
        node.prev = null;
        this.head = next;
        this.head.prev = null;
        this.length--;

        return node.value;
    }

    /**
     * Adds a value to the front of list, then returns the new
     * length of the list.
     * @param value - The value to add to the front of the list.
     * @returns The new length of the list.
     */
    unshift(value: T): number {
        const node = new Node<T>(value);

        if (!this.length) {
            this.head = node;
            this.tail = node;
            this.length++;

            return this.length;
        }

        const next = this.head;
        next.prev = node;
        node.next = next;
        this.head = node;
        this.length++;

        return this.length;
    }

    /**
     * Iterates over every node in the list and invokes a callback.
     * @param fn - The callback to invoke per node.
     */
    forEach(
        fn: (value: T, index: number, list: DoublyLinkedList<T>) => void
    ): void {
        let index = 0;
        let node = this.head;

        while (node) {
            fn(node.value, index, this);
            index++;
            node = node.next;
        }
    }

    /**
     * Returns the first value to satisfy the find callback.
     * @param fn - The callback used to find the matching value.
     * @returns The first instance of the node passing the test.
     */
    find(
        fn: (value: T, index: number, list: DoublyLinkedList<T>) => boolean
    ): Node<T> {
        let index = 0;
        let node = this.head;

        while (node) {
            if (fn(node.value, index, this)) return node;
            index++;
            node = node.next;
        }
    }
}

export class Node<T> {
    value: T;
    next: Node<T>;
    prev: Node<T>;

    /**
     * A node is the atomic unit of a doubly linked list. The node
     * stores an arbitrary value with pointers to the next and
     * previous node in the list.
     * @param value - The value to store in the node.
     * @class
     */
    constructor(value: T) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}
