const { sum,subtraction,multiply } = require('./math')

describe('basic math', () => {
    test('Adds 5 + 11 equals 16', () => {
        const val = sum(5,11)
        expect(val).toBe(16)
    });

    test('subtract', () => {
        const difference = subtraction(10,6)
        expect(difference).toBe(4)
    })

    test('multiply', () => {
        const multiple = multiply(5,5)
        expect(multiple).toBe(25)
    })
})
