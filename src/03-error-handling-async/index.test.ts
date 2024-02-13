// Uncomment the code below and write your tests
import {
  throwError,
  throwCustomError,
  resolveValue,
  MyAwesomeError,
  rejectCustomError,
} from './index';

describe('resolveValue', () => {
  test('should resolve provided value', async () => {
    const result = await resolveValue(6);
    expect(result).toEqual(6);
  });
});

describe('throwError', () => {
  test('should throw error with provided message', () => {
    const result = () => {
      throwError('My personal error');
    };
    expect(result).toThrow('My personal error');
  });

  test('should throw error with default message if message is not provided', () => {
    const result = () => {
      throwError();
    };
    expect(result).toThrow('Oops!');
  });
});

describe('throwCustomError', () => {
  test('should throw custom error', () => {
    const result = () => {
      throwCustomError();
    };
    expect(result).toThrowError(new MyAwesomeError());
  });
});

describe('rejectCustomError', () => {
  test('should reject custom error', async () => {
    const result = async () => {
      await rejectCustomError();
    };
    expect(result).rejects.toThrowError(new MyAwesomeError());
  });
});
