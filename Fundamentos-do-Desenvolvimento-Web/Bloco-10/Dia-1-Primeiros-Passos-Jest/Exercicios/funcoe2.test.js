const myRemove = require('./funcoe2');

describe('Requisito 2', () => {
    it('Function myRemove() recieve myRemove([1, 2, 3, 4], 3)', () => {
        expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
    });
    test('Function myRemove() recieve myRemove([1, 2, 3, 4], 3)', () => {
        expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
      });
    it('Function myRemove() recieve myRemove([1, 2, 3, 4], 5)', () => {
        expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
    });
});;