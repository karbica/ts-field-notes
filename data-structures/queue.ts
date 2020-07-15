/**
 * A Queue data structure implementation that allows values to be
 * accessed in a first-in first-out manner. The underlying data
 * structure is an array.
 * 
 * @returns An instance of a queue.
 */
export default class Queue<T> {
    #queue: T[];

    constructor() {
        this.#queue = [];
    }

    enqueue(item: T): number {
        return this.#queue.push(item);
    }

    dequeue(): T {
        return this.isEmpty() ? null : this.#queue.shift();
    }

    peek(): T {
        return this.isEmpty() ? null : this.#queue[0];
    }

    isEmpty(): boolean {
        return this.#queue.length === 0;
    }

    get length(): number {
        return this.#queue.length;
    }
}
