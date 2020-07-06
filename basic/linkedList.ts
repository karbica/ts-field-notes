export default class LinkedList<T> {
    length: number;
    head: Node<T> | null;
    tail: Node<T> | null;

    /**
     * Initializes a linked list from an array of values.
     * 
     * @param values - An array of values to initialize an instance.
     * @returns An instance of a linked list.
     */
    static from<T>(values: T[]): LinkedList<T> {
        const linkedList = new LinkedList<T>();

        for (const value of values) {
            linkedList.push(value);
        }

        return linkedList;
    }

    /**
     * A Linked List data structure stores values with pointers to the
     * next value in the series. This class will expose common methods
     * implemented by an Array.
     * 
     * @class
     */
    constructor() {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }

    /**
     * Appends a value to the end of the linked list.
     * 
     * @param value - A value to append.
     * @returns The length of the linked list.
     */
    push(value: T): number {
        const node = new Node<T>(value);

        if (this.length === 0) {
            this.head = node;
            this.tail = node;
            this.length++;
            return this.length;
        }

        if (this.length === 1) {
            this.head.next = node;
            this.tail = node;
            this.length++;
            return this.length;
        }

        this.tail.next = node;
        this.tail = node;
        this.length++;
        return this.length;
    }

    /**
     * Removes the node at the end of the linked list and returns
     * that node.
     * 
     * @returns The node removed from the linked list.
     */
    pop(): T {
        const node = this.tail;
        const penultimate = this.penultimate();
        penultimate.next = null;
        this.tail = penultimate;
        this.length--;
        return node.value;
    }

    /**
     * Iterates over every value in the linked list and invokes the
     * given function.
     * @param fn - The callback function to invoke.
     */
    forEach(fn: (node: Node<T>) => void): void {
        let cursor = this.head;
        while (cursor) {
            fn(cursor);
            cursor = cursor.next;
        }
    }

    /**
     * Finds a node in the linked list given the find function.
     * 
     * @param fn - The find function to invoke.
     * @returns The callback function to determine the find decision.
     */
    find(fn: (node: Node<T>) => boolean): Node<T> | null {
        let cursor = this.head;

        while (cursor) {
            if (fn(cursor)) {
                return cursor;
            } else {
                cursor = cursor.next;
            }
        }

        return null;
    }

    /**
     * Returns the node right before the tail.
     * 
     * @returns The penultimate node.
     */
    penultimate(): Node<T> | null {
        if (this.length < 2) {
            return null;
        }

        let cursor = this.head;
        while (cursor.next) {
            if (!cursor.next.next) {
                return cursor;
            } else {
                cursor = cursor.next;
            }
        }
    }
}

export class Node<T> {
    value: T;
    next: Node<T> | null;

    /**
     * A node within a linked list contains a stored value and a
     * pointer to the next node.
     * 
     * @class
     */
    constructor(value: T) {
        this.value = value;
        this.next = null;
    }
}
