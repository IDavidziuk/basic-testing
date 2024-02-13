// Uncomment the code below and write your tests
import { simpleCalculator, Action } from './index';

const testCases = [
  { a: 4, b: 6, action: Action.Add, expected: 10 },
  { a: 6, b: 4, action: Action.Subtract, expected: 2 },
  { a: 6, b: 4, action: Action.Multiply, expected: 24 },
  { a: 6, b: 2, action: Action.Divide, expected: 3 },
  { a: 2, b: 1, action: Action.Exponentiate, expected: 2 },
  { a: 6, b: 2, action: 'Plus', expected: null },
  { a: 'a', b: 'b', action: Action.Add, expected: null },
];

describe('testing simpleCalculator function', () => {
  // This test case is just to run this test suite, remove it when you write your own tests
  test.each(testCases)(
    'should return correct result',
    ({ a, b, action, expected }) => {
      const result = simpleCalculator({ a, b, action });
      expect(result).toEqual(expected);
    },
  );
});
