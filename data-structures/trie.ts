export default class Trie {
    root: Node;

    /**
     * Creates an instance of a Trie from an array of words.
     * @param words - An array of words to initialize the Trie with.
     * @returns An instance of a Trie with the inserted words.
     */
    static from(words: string[]): Trie {
        const trie = new Trie();

        for (const word of words) {
            trie.insert(word);
        }

        return trie;
    }

    /**
     * A Trie data structure creates paths of nodes out of the inserted
     * words. The serial nature of a word allows for efficient searching
     * since the Trie only has to look for nodes within the given path.
     * @class
     */
    constructor() {
        this.root = new Node(null);
    }

    /**
     * Inserts the given word into the trie. 
     * @param word - The word to be inserted into the Trie.
     */
    insert(word: string): void {
        let cursor = this.root;

        for (const letter of word) {
            if (cursor.children.has(letter)) {
                cursor = cursor.children.get(letter);
            } else {
                const node = new Node(letter);
                node.parent = cursor;
                cursor.children.set(letter, node);
                cursor = node;
            }
        }

        cursor.end = true;
    }

    /**
     * Checks if the given word is present in the Trie.
     * @param word - The word to check for presence.
     * @returns A boolean indicating whether the word exists.
     */
    has(word: string): boolean {
        let cursor = this.root;

        for (const letter of word) {
            if (cursor.children.has(letter)) {
                cursor = cursor.children.get(letter);
            } else {
                return false;
            }
        }

        return cursor.end;
    }

    /**
    * This search method implementation iteratively walks the prefix
    * and then it recursively walks suffix. If the prefix is also
    * a word, it won't be included in the result.
    * @param prefix - The prefix of the word to search for.
    * @returns An array of words related to the prefix.
    */
    search(prefix: string): string[] {
        let cursor = this.root;

        for (const letter of prefix) {
            if (cursor.children.has(letter)) {
                cursor = cursor.children.get(letter);
            } else {
                return [];
            }
        }

        function _search(
            node: Node,
            words: string[] = [],
            suffix: string = ''
        ): string[] {
            if (node.end && prefix !== prefix + suffix) {
                words.push(prefix + suffix);
            }

            if (node.hasChildren()) {
                node.children.forEach((node) => {
                    _search(node, words, suffix + node.key);
                });
            }

            return words;
        }

        return _search(cursor);
    }

    /**
     * Removes the given word from the Trie. 
     * @param word - The word to remove from the Trie.
     * @returns A boolean indicating whether the word was removed.
     */
    remove(word: string): boolean {
        if (!this.has(word)) {
            return false;
        }

        let cursor = this.root;
        let path = [];

        for (const letter of word) {
            const next = cursor.children.get(letter);
            path.push(next);
            cursor = next;
        }

        while (path.length) {
            const node = path.pop();
            const parent = node.parent;

            /**
             * This condition removes a word from the trie if it
             * happens to be a prefix to longer words. We don't
             * want to remove the path, just the variable indicating
             * it is a word.
             */
            if (node.hasChildren() && node.end) {
                node.end = false;
                return true;
            }

            /**
             * This condition removes a the last character from the
             * word in the trie, which is a leaf. However, the path
             * to that leaf may be dangling. This means there is a
             * branch that is not pointing to any leaves. Thus, the
             * another condition is required, so we continue.
             */
            if (!node.hasChildren() && node.end) {
                parent.children.delete(node.key);
                continue;
            }

            /**
             * This condition is to clean up any dangling branches.
             * Any node that is not leaf (via the `end` property) and
             * has no children means that the node is in a path that
             * goes nowhere. We turn to the parent to remove it as a
             * child and continue the loop until there are no more
             * nodes to check.
             */
            if (!node.hasChildren() && !node.end) {
                parent.children.delete(node.key);
                continue;
            }
        }

        return true;
    }
}

export class Node {
    key: string | null;
    parent: Node;
    children: Map<string, Node>;
    end: boolean;

    constructor(key: string | null) {
        this.key = key;
        this.parent = null;
        this.children = new Map<string, Node>();
        this.end = false;
    }

    hasChildren(): boolean {
        return this.children.size > 0;
    }
}
