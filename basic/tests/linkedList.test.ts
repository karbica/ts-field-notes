import tape from '../../fixture';
import LinkedList from '../linkedList';

tape('Linked List Data Structure', (t) => {
    const values = [...Array<number>(10).keys()];
    const ll = LinkedList.from<number>(values);
    t.equal(ll.head.value, 0, 'should correctly point to head value');
    t.equal(ll.tail.value, 9, 'should correctly point to tail value');
    t.equal(ll.length, 10, 'should have the correct length');
    t.equal(ll.pop(), 9, 'should correctly pop value');
    t.equal(ll.length, 9, 'should correctly have length after pop');
    t.equal(ll.push(9), 10, 'should correctly have length after push');
    t.equal(ll.tail.value, 9, 'should correctly point to value after push');
    t.equal(
        ll.penultimate().value,
        8,
        'should correctly refer to the node value before the tail'
    );
    t.equal(
        ll.find((node) => node.value === 3).value,
        3,
        'should correctly find a node given a find function'
    );

    // TODO A more correct way to test if the iteratee was called
    // is through a spy. Instead we have to test if it was able to
    // produce an array whereas we could have check if it was called
    // n times.
    const forEachValues = [];
    ll.forEach((node) => forEachValues.push(node.value));
    t.same(forEachValues, values, 'should correctly iterate over every node');
    t.end();
});
