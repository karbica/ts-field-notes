import tape from '../../fixture';
import Graph from '../graph';

tape('Graph Data Structure', (t) => {
    const serialized = [
        ['a', 1, []],
        ['b', 2, ['a']],
        ['c', 3, ['b']],
        ['d', 4, ['a', 'c']],
        ['e', 5, ['b', 'd']],
    ] as [string, number, string[]][];
    const graph = new Graph<number>();
    t.doesNotThrow(
        () => Graph.from<number>(serialized),
        'should build a graph instance from a serialized graph'
    );
    t.throws(
        () => Graph.from<number>([['a', 1, ['z']]]),
        'should fail to build a graph instance due to an undefined node'
    );
    t.doesNotThrow(() => graph.addNode('a', 1), 'should add node with key `a`');
    t.doesNotThrow(() => graph.addNode('b', 2), 'should add node with key `b`');
    t.doesNotThrow(() => graph.addNode('c', 3), 'should add node with key `c`');
    t.equal(graph.getNode('a').key, 'a', 'should get node with key `a`');
    t.equal(graph.getNode('b').key, 'b', 'should get node with key `b`');
    t.equal(graph.getNode('c').key, 'c', 'should get node with key `c`');
    t.doesNotThrow(
        () => graph.addEdge(graph.getNode('a'), graph.getNode('b')),
        'should add edge between node `a` and node `b`'
    );
    t.doesNotThrow(
        () => graph.addEdge(graph.getNode('b'), graph.getNode('c')),
        'should add edge between node `b` and node `c`'
    );
    t.equal(
        graph.getNode('a').neighbors.size,
        1,
        'should have one neighbor for node `a`'
    );
    t.end();
});
