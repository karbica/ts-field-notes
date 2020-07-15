import sinon from 'sinon';
import tape from '../../fixture';
import DoublyLinkedList from '../doubly-linked-list';

tape('Doubly Linked List', (t) => {
    const spy = sinon.spy();
    let l: DoublyLinkedList<string>;
    t.doesNotThrow(
        () => (l = DoublyLinkedList.from<string>(['a', 'b', 'c', 'd'])),
        'iterates over array pushing values'
    );
    t.equal(l.head.value, 'a', 'should point to correct head node');
    t.equal(l.tail.value, 'd', 'should point to correct tail ndoe');
    t.equal(l.length, 4, 'should have the correct length');
    t.equal(l.pop(), 'd', 'should pop the correct value');
    t.equal(l.tail.value, 'c', 'should point to correct tail ndoe');
    t.equal(l.length, 3, 'should have the correct length');
    t.equal(l.shift(), 'a', 'should shift the correct value');
    t.equal(l.head.value, 'b', 'should point to correct head node');
    t.equal(l.length, 2, 'should have the correct length');
    t.equal(l.unshift('z'), 3, 'should return correct length after unshift');
    t.equal(l.head.value, 'z', 'should point to correct head node');
    t.doesNotThrow(() => l.forEach(spy), 'invokes spy per node without error');
    t.equal(spy.callCount, l.length, 'should invoke callback the correct amount of times');
    t.equal(l.find((v) => v === 'b').value, 'b', 'correctly find a node with given find callback');
    t.equal(l.find((v) => v === 'a'), undefined, 'should return `undefined` when find callback misses');
    t.end();
});
