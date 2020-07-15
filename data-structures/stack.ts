export default class Stack<T> {
    #stack: T[];

    /**
     * A stack allows items to be accessed in a first-in last-out
     * manner with other methods to control the flow.
     * @class
     */
    constructor() {
        this.#stack = [];
    }

    /**
     * Adds an item to the top of the stack.
     * @param item - Pushes the given item.
     * @returns The new length of the stack.
     */
    push(item: T): number {
        return this.#stack.push(item);
    }

    /**
     * Removes an item from the top of the stack.
     * @returns The item removed from the top of the stack.
     */
    pop(): T {
        return this.isEmpty() ? null : this.#stack.pop();
    }

    /**
     * Returns the item at the top of the stack without removing it
     * from the stack.
     * @returns The item at the top of the stack.
     */
    peek(): T {
        return this.isEmpty() ? null : this.#stack[this.length - 1];
    }

    /**
     * Checks whether or not the stack is empty.
     * @returns A boolean indicating if the stack is empty.
     */
    isEmpty(): boolean {
        return this.#stack.length === 0;
    }

    /**
     * The count of items in the stack.
     * @returns The number of items in the stack.
     */
    get length(): number {
        return this.#stack.length;
    }
}
