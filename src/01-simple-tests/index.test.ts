// Uncomment the code below and write your tests
import { simpleCalculator, Action } from './index';

describe('simpleCalculator tests', () => {
  test('should add two numbers', () => {
    const result = simpleCalculator({ a: 4, b: 6, action: Action.Add });
    expect(result).toEqual(10);
  });

  test('should subtract two numbers', () => {
    const result = simpleCalculator({ a: 6, b: 4, action: Action.Subtract });
    expect(result).toEqual(2);
  });

  test('should multiply two numbers', () => {
    const result = simpleCalculator({ a: 6, b: 4, action: Action.Multiply });
    expect(result).toEqual(24);
  });

  test('should divide two numbers', () => {
    const result = simpleCalculator({ a: 6, b: 2, action: Action.Divide });
    expect(result).toEqual(3);
  });

  test('should exponentiate two numbers', () => {
    const result = simpleCalculator({
      a: 2,
      b: 1,
      action: Action.Exponentiate,
    });
    expect(result).toEqual(2);
  });

  test('should return null for invalid action', () => {
    const result = simpleCalculator({ a: 6, b: 2, action: 'Plus' });
    console.log(result);
    expect(result).toBeNull;
  });

  test('should return null for invalid arguments', () => {
    const result = simpleCalculator({ a: 'a', b: 'b', action: Action.Add });
    console.log(result);
    expect(result).toBeNull;
  });
});
