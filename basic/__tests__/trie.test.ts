import tape from 'tape';
import Trie from '../trie';
import util from 'util';

tape('Trie Data Structure', (t) => {
    const words = ['bar', 'cart', 'car', 'cat', 'carts', 'ark', 'art', 'zulu'];
    const trie = Trie.from(words);
    t.true(trie.has('bar'), 'should contain the word `bar`');
    t.true(trie.has('cart'), 'should contain the word `cart`');
    t.true(trie.has('car'), 'should contain the word `car`');
    t.true(trie.has('cat'), 'should contain the word `cat`');
    trie.remove('bar');
    t.false(trie.has('bar'), 'should remove the word `bar`');
    trie.remove('cart');
    t.false(trie.has('cart'), 'should remove the word `cart`');
    t.true(trie.has('car'), 'should contain the word `car`');
    t.true(trie.has('carts'), 'should contain the word `carts`');
    t.same(trie.search('ca'), ['car', 'carts', 'cat'], 'should return words based on the prefix `ca`');
    t.end();
});
