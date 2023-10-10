const { sumOfArray, reverseArray, lastNElements } = require('./02-Arrays');

test('sumOfArray should return the correct sum', () => {
    expect(sumOfArray([1, 2, 3, 4])).toBe(10);
    expect(sumOfArray([10, 20, 30, 40])).toBe(100);
    expect(sumOfArray([])).toBe(0);
});

test('reverseArray should return the array reversed', () => {
    expect(reverseArray(['a', 'b', 'c', 'd'])).toEqual(['d', 'c', 'b', 'a']);
    expect(reverseArray([1, 2, 3, 4])).toEqual([4, 3, 2, 1]);
    expect(reverseArray([])).toEqual([]);
});

test('lastNElements should return the last n elements of the array', () => {
    expect(lastNElements([1, 2, 3, 4, 5], 2)).toEqual([4, 5]);
    expect(lastNElements([1, 2, 3, 4, 5], 5)).toEqual([1, 2, 3, 4, 5]);
    expect(lastNElements([1, 2, 3, 4, 5], 10)).toEqual([1, 2, 3, 4, 5]);
    expect(lastNElements([], 2)).toEqual([]);
});
