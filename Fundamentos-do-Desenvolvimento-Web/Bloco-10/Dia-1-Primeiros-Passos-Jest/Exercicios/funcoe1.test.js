const sum = require('./funcoe1');

describe('Requisito 1', () => {
    it('Function sum() recieve sum(4, 5) return 9', () => {
        expect(sum(4,5)).toBe(9);
    });
    it('Function sum() recieve sum(0, 0) return 0', () => {
        expect(sum(0,0)).toBe(0);
    });
    it('Function sum() recieve error when a string is the parameter', () => {
        expect(() => {
            sum(4, '5');
        }).toThrow();
    });
    it('Message error is "parameters must be numbers"', () => {
        expect(() => {
            sum(4, '5');
        }).toThrow(/parameters must be numbers/);
    });
});