import { Node } from '../data-structures/binary-tree';

/**
 * Sums all nodes that have even-valued grandparents.
 * @param root - The root value to traverse.
 * @returns The sum of the nodes.
 */
export default function (root: Node): number {
    return preOrder(root).reduce((sum, value) => sum + value, 0);
}

function preOrder(
    node: Node,
    parent: Node = null,
    grandparent: Node = null,
    values: number[] = []
): number[] {
    if (!node) return;
    if (grandparent && grandparent.value % 2 === 0) values.push(node.value);
    preOrder(node.left, node, parent, values);
    preOrder(node.right, node, parent, values);
    return values;
}
