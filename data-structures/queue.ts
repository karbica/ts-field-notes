export default class Queue<T> {
    #queue: T[];

    /**
     * A queue allows data to be accessed in a first-in first-out
     * manner with other methods to control the flow.
     * @class
     */
    constructor() {
        this.#queue = [];
    }

    /**
     * Adds an item to the back of the queue.
     * @param item - Enqueues the given item.
     * @returns The new length of the queue.
     */
    enqueue(item: T): number {
        return this.#queue.push(item);
    }

    /**
     * Removes an item from the front of the queue.
     * @returns The item removed from the front of the queue.
     */
    dequeue(): T {
        return this.isEmpty() ? null : this.#queue.shift();
    }

    /**
     * Returns the item at the front of the queue without removing
     * it from the queue.
     * @returns The item at the front of the queue.
     */
    peek(): T {
        return this.isEmpty() ? null : this.#queue[0];
    }

    /**
     * Checks whether or not the queue is empty.
     * @returns A boolean indicating if the queue is empty.
     */
    isEmpty(): boolean {
        return this.#queue.length === 0;
    }

    /**
     * The length or count of items in the queue.
     * @returns The number of items in the queue.
     */
    get length(): number {
        return this.#queue.length;
    }
}
