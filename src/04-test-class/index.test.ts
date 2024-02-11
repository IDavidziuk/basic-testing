// Uncomment the code below and write your tests
import { SynchronizationFailedError, getBankAccount } from '.';

describe('BankAccount', () => {
  test('should create account with initial balance', () => {
    const result = getBankAccount(10).getBalance();
    expect(result).toEqual(10);
  });

  test('should throw InsufficientFundsError error when withdrawing more than balance', () => {
    const result = () => {
      getBankAccount(10).withdraw(100);
    };
    expect(result).toThrowError();
  });

  test('should throw error when transferring more than balance', () => {
    const result = () => {
      const account = getBankAccount(10);
      getBankAccount(10).transfer(20, account);
    };
    expect(result).toThrowError();
  });

  test('should throw error when transferring to the same account', () => {
    const result = () => {
      const account = getBankAccount(10);
      account.transfer(5, account);
    };
    expect(result).toThrowError();
  });

  test('should deposit money', () => {
    const result = getBankAccount(10).deposit(5).getBalance();
    expect(result).toEqual(15);
  });

  test('should withdraw money', () => {
    const result = getBankAccount(10).withdraw(3).getBalance();
    expect(result).toEqual(7);
  });

  test('should transfer money', () => {
    const account = getBankAccount(5);
    const result = getBankAccount(10).transfer(5, account).getBalance();
    expect(result).toEqual(5);
  });

  test('fetchBalance should return number in case if request did not failed', async () => {
    const result = await getBankAccount(10).fetchBalance();
    expect(result).toBeNull;
  });

  test('should set new balance if fetchBalance returned number', async () => {
    const result = await getBankAccount(10);
    jest.spyOn(result, 'fetchBalance').mockResolvedValue(100);
    await result.synchronizeBalance();
    expect(result.getBalance()).toEqual(100);
  });

  test('should throw SynchronizationFailedError if fetchBalance returned null', async () => {
    const result = await getBankAccount(10);
    jest.spyOn(result, 'fetchBalance').mockResolvedValue(null);

    expect(async () => await result.synchronizeBalance()).rejects.toThrow(
      SynchronizationFailedError,
    );
  });
});
