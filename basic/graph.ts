import Queue from './queue';

export default class Graph<T> {
    nodes: Map<string, Node<T>>;
    edges: [Node<T>, Node<T>][];
    directed: boolean;

    static from<T>(
        paths: [string, T, string[]][],
        directed: boolean = false
    ): Graph<T> {
        const graph = new Graph<T>(directed);

        // Iterate once to create nodes so we can check for presence
        // in the next iteration for adding edges.
        for (const path of paths) {
            const [key, value] = path;
            graph.addNode(key, value);
        }

        // Iterate again to add edges, throw if node is not found.
        for (const path of paths) {
            const [key, /* value */, neighbors] = path;
            const node = graph.getNode(key);

            for (const neighbor of neighbors) {
                if (!graph.hasNode(neighbor)) {
                    throw new Error(`graph does not have node: ${neighbor}`);
                }

                graph.addEdge(node, graph.getNode(neighbor));
            }
        }

        return graph;
    }

    constructor(directed: boolean = false) {
        this.nodes = new Map<string, Node<T>>();
        this.edges = [];
        this.directed = directed;
    }

    addNode(key: string, value: T): Node<T> {
        if (this.hasNode(key)) {
            return this.nodes.get(key);
        }

        const node = new Node<T>(key, value);
        this.nodes.set(key, node);
        return node;
    }

    // TODO Figure out what to return (or throw) if the key does not
    // exist in the map.
    getNode(key: string): Node<T> {
        return this.nodes.get(key);
    }

    hasNode(key: string): boolean {
        return this.nodes.has(key);
    }

    addEdge(a: Node<T>, b: Node<T>): void {
        a.addNeighbor(b);
        this.edges.push([a, b]);

        if (!this.directed) {
            b.addNeighbor(a);
        }
    }

    // TODO Allow a DFS traversal method rather than just a BFS.
    traverse(start: Node<T>, fn: (node: Node<T>) => void): void {
        const visited = new Set<string>();
        const queue = new Queue<Node<T>>();

        queue.enqueue(start);

        while (!queue.isEmpty()) {
            const node = queue.dequeue();
            fn(node);
            visited.add(node.key);
            for (const neighbor of node.neighbors.values()) {
                if (!visited.has(neighbor.key)) {
                    queue.enqueue(neighbor);
                }
            }
        }
    }
}

export class Node<T> {
    key: string;
    value: T;
    neighbors: Map<string, Node<T>>;

    constructor(key: string, value: T) {
        this.key = key;
        this.value = value;
        this.neighbors = new Map<string, Node<T>>();
    }

    addNeighbor(node: Node<T>): void {
        this.neighbors.set(node.key, node);
    }

    removeNeighbor(key: string): boolean {
        return this.neighbors.delete(key);
    }

    hasNeighbors(): boolean {
        return this.neighbors.size !== 0;
    }
}
