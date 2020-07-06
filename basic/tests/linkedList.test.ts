import tape from '../../fixture';
import sinon from 'sinon';
import LinkedList from '../linkedList';

tape('Linked List Data Structure', (t) => {
    let linkedList;
    const values = [...Array<number>(10).keys()];
    t.doesNotThrow(() => linkedList = LinkedList.from<number>(values));
    t.equal(linkedList.head.value, 0, 'should correctly point to head value');
    t.equal(linkedList.tail.value, 9, 'should correctly point to tail value');
    t.equal(linkedList.length, 10, 'should have the correct length');
    t.equal(linkedList.pop(), 9, 'should correctly pop value');
    t.equal(linkedList.length, 9, 'should correctly have length after pop');
    t.equal(linkedList.push(9), 10, 'should correctly have length after push');
    t.equal(linkedList.tail.value, 9, 'should correctly point to value after push');
    t.equal(
        linkedList.penultimate().value,
        8,
        'should correctly refer to the node value before the tail'
    );
    t.equal(
        linkedList.find((node) => node.value === 3).value,
        3,
        'should correctly find a node given a find function'
    );
    const spy = sinon.spy();
    linkedList.forEach(spy);
    t.equal(spy.callCount, linkedList.length, 'should correctly iterate over every node');
    t.end();
});
