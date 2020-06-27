import tape from 'tape';
import Tree from '../tree';

tape('Tree Data Structure', (t) => {
    let traversal = [];
    const tree = new Tree<string>('a');
    const root = tree.root;
    const b = root.addChild('b');
    const c = root.addChild('c');
    const d = root.addChild('d');
    b.addChild('e');
    c.addChild('f');
    c.addChild('g');
    c.addChild('h');
    d.addChild('i');
    t.equal(tree.root.value, 'a', 'should correctly be the root');
    t.same(tree.root.children.map((node) => node.value), ['b', 'c', 'd'], 'should correctly be the children of root');
    tree.traverse((node) => traversal.push(node.value));
    t.same(traversal, ['a', 'b', 'e', 'c', 'f', 'g', 'h', 'd', 'i'], 'should correctly traverse the tree');
    t.end();
});
