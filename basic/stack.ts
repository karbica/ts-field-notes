/**
 * A Stack data structure implementation that allows values to be
 * accessed in first-in last-out manner. The underlying data
 * structure is an array.
 * 
 * @returns An instance of a stack.
 */
export default class Stack<T> {
    #queue: T[];

    constructor() {
        this.#queue = [];
    }

    push(item: T): number {
        return this.#queue.push(item);
    }

    pop(): T {
        return this.isEmpty() ? null : this.#queue.pop();
    }

    peek(): T {
        return this.isEmpty() ? null : this.#queue[this.length - 1];
    }

    isEmpty(): boolean {
        return this.#queue.length === 0;
    }

    get length(): number {
        return this.#queue.length;
    }
}
