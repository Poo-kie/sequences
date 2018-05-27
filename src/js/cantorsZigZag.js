import OrderedPair from './OrderedPair.js'

/**
 * Enumerates all ordered pairs of the form (x, y)
 *   given the following rules
 *   1)  the sum x + y is represented in increasing order in each pair
 *   2)  for pairs with the same sum, smaller values of x appear first
 * @param {Number} maxResults max results to enumerate
 */
function* cantorsZigZag(maxResults = undefined) {
 
    var count = 0;

    for (var i = 1; ; i++) {
        for (var pair of getDecodedGroup(i)) {
            
            if (maxResults !== undefined && count === maxResults) return;
            count++;

            yield pair;
        }
    }

    this.done = true;
}

function* getDecodedGroup(sum) {
    
    var x = 1;

    for (var y = sum; y > 0; y--) {
        yield new OrderedPair(x++, y);
    } 
}

export default cantorsZigZag