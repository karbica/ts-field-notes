import { Node } from '../data-structures/binary-tree';

/**
 * Rebalance a binary tree given the root node of that tree.
 * @param root - The root node of a binary tree.
 * @returns The modified root node, balanced.
 */
export default function (root: Node): Node {
    const arr = inOrder(root);
    arr.sort((a: number, b: number) => a - b);
    return build(arr, 0, arr.length - 1);
}

function inOrder(node: Node): number[] {
    if (!node) return [];
    return [...inOrder(node.left), node.value, ...inOrder(node.right)];
}

function build(arr: number[], left: number, right: number): Node {
    if (left > right) return null;
    const mid = Math.floor(left + (right - left) / 2);
    const node = new Node(arr[mid]);
    node.left = build(arr, left, mid - 1);
    node.right = build(arr, mid + 1, right);
    return node;
}
