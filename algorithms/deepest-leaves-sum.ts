import { Node } from '../data-structures/binary-tree';

/**
 * Sums the deepest leaves of a binary tree.
 * @param root - The root node of a binary tree.
 * @returns The sum of the deepest leaves.
 */
export default function (root: Node): number {
    const levels = [] as number[][];
    const queue = [root];

    while (queue.length) {
        let depth = queue.length;
        const level = [] as number[];
        while (depth !== 0) {
            const node = queue.shift();
            level.push(node.value);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
            depth--;
        }
        levels.push(level);
    }

    return levels[levels.length - 1].reduce((sum, val) => sum + val);
}
