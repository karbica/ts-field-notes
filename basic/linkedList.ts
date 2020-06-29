/**
 * A Linked List data structure stores values with pointers to the
 * next value in the series. This class will expose common methods
 * implemented by an Array.
 * 
 * @returns An instance of a LinkedList.
 */
export default class LinkedList<T> {
    length: number;
    head: Node<T> | null;
    tail: Node<T> | null;

    static from<T>(values: T[]): LinkedList<T> {
        const ll = new LinkedList<T>();
        values.forEach((node: T) => ll.push(node));
        return ll;
    }

    constructor() {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }

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

    pop(): T {
        const node = this.tail;
        const penultimate = this.penultimate();
        penultimate.next = null;
        this.tail = penultimate;
        this.length--;
        return node.value;
    }

    forEach(fn: (node: Node<T>) => void): void {
        let cursor = this.head;
        while (cursor) {
            fn(cursor);
            cursor = cursor.next;
        }
    }

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

/**
 * A Node within a Linked List contains a stored value and a pointer
 * to the next Node.
 * 
 * @returns An instance of a Node to be used in a Linked List.
 */
export class Node<T> {
    value: T;
    next: Node<T> | null;

    constructor(value: T) {
        this.value = value;
        this.next = null;
    }
}
