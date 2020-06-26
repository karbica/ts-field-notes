import tape from 'tape';
import Stack from '../stack';

tape('Stack Data Structure', (t) => {
    t.plan(12);
    const stack = new Stack<string>();
    stack.push('a');
    stack.push('b');
    stack.push('c');
    t.equal(stack.peek(), 'c', 'should peek correctly');
    t.equal(stack.length, 3, 'should have the correct length');
    t.equal(stack.pop(), 'c', 'should pop correctly');
    t.equal(stack.length, 2, 'should have the correct length');
    t.equal(stack.peek(), 'b', 'should peek correctly after dequeue');
    t.false(stack.isEmpty(), 'should not be empty');
    t.equal(stack.pop(), 'b', 'should pop correctly');
    t.equal(stack.pop(), 'a', 'should pop correctly');
    t.true(stack.isEmpty(), 'should be empty after pop');
    t.equal(stack.length, 0, 'should have a length of zero');
    t.equal(stack.pop(), null, 'should be null when pop while empty');
    t.equal(stack.peek(), null, 'should be null when peek while empty');
});
