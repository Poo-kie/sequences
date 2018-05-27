import EnumeratedResult from "./EnumeratedResult.js"

/**
 * Represents an ordered pair with x and y coordinate (x, y)
 */
class OrderedPair extends EnumeratedResult {

    /**
     * Create an ordered pair with x any y coordinates
     * @param {Number} x coordinate
     * @param {Number} y coordinate
     */
    constructor(x, y) {
        super();
        this.x = x;
        this.y = y;
    }
}

export default OrderedPair