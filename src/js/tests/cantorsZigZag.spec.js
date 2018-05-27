import cantorsZigZag from "../cantorsZigZag.js"
import OrderedPair from "../OrderedPair.js";

describe("cantorsZigZag", () => {
    it("should yield expected values", () => {
        var firstSix = [ new OrderedPair(1, 1), new OrderedPair(1, 2), new OrderedPair(2, 1), 
            new OrderedPair(1, 3), new OrderedPair(2, 2), new OrderedPair(3, 1)];
        
        var i = 0;
        for (var pair of cantorsZigZag(6)) {
            expect(pair.x).toEqual(firstSix[i].x);
            expect(pair.y).toEqual(firstSix[i].y);
    
            i++;
        }
    });

    it("should only yield maxResults specified", () => {
        var results = Array.from(cantorsZigZag(10));

        expect(results.length).toBe(10);
    });
});
