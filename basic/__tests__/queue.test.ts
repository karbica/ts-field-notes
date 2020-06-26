import test from "tape";
import Queue from "../queue";

test("Queue Data Structure", (t) => {
    t.plan(12);
    const queue = new Queue<string>();
    queue.enqueue('a');
    queue.enqueue('b');
    queue.enqueue('c');
    t.equal(queue.peek(), 'a', 'should peek correctly');
    t.equal(queue.length, 3, 'should have the correct length');
    t.equal(queue.dequeue(), 'a', 'should dequeue correctly');
    t.equal(queue.length, 2, 'should have correct length after dequeue');
    t.equal(queue.peek(), 'b', 'should peek correctly after dequeue');
    t.false(queue.isEmpty(), 'should not be empty');
    t.equal(queue.dequeue(), 'b', 'should dequeue correctly');
    t.equal(queue.dequeue(), 'c', 'should dequeue correctly');
    t.true(queue.isEmpty(), 'should be empty after dequeue');
    t.equal(queue.length, 0, 'should have a length of zero');
    t.equal(queue.dequeue(), null, 'should be null when dequeue while empty')
    t.equal(queue.peek(), null, 'should be null when peek while empty')
    t.end();
});
